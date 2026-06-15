---
title: 'Building apimyresume.com: a tailored resume API for every job application'
date: '2026-06-15'
excerpt: 'A self-hosted, open-source tailored resume API: one master resume in, one job-specific PDF out. Built with Bun, Hono, Typst, and SQLite — wire it into n8n, an LLM agent, or Zapier and never hand-edit a resume again.'
cover: '/img/blog/apimyresume/architecture.png'
category: 'Automation'
tags: ['Bun', 'Hono', 'Typst', 'API', 'Job Search', 'Docker', 'Self-hosted', 'SQLite', 'AI Agents']
readingTime: 7
published: true
---

![apimyresume architecture: a single Docker image runs the API and dashboard on port 3000. The dashboard manages a master resume in SQLite; the REST API renders a child resume (keyword-tuned copy of the master) as a PDF via Typst for each job description sent by an AI agent, n8n, or Zapier.](/img/blog/apimyresume/architecture.png)

I built a thing. It's called [apimyresume.com](https://apimyresume.com), and it's the missing piece in my job-hunt pipeline: a self-hosted **tailored resume API** that takes one master resume plus a job description and returns a polished, job-specific PDF. The whole project is open source, runs in a single Docker container, and is designed to be called by an AI agent — not a human.

This is what I built, why I built it, and how the moving parts fit together.

## The gap I was trying to close

I already had a scraping-and-scoring pipeline. An n8n workflow pulls LinkedIn listings, scores each one against my base resume using DeepSeek, and writes a skill-gap report for the high-fit jobs. By the time I open the dashboard, the workflow has told me *which* jobs to apply to.

It just hadn't given me the resume to apply *with*.

Every job description is its own dialect. A backend role at a fintech wants PCI-DSS, transaction integrity, and a Go-flavored CV. A platform role at a startup wants Kubernetes, observability, and developer-experience stories. Same career arc, different emphasis — and that emphasis is what the applicant tracking system (ATS) is scanning for.

I didn't want to hand-edit a resume for every application. I didn't want to subscribe to a SaaS resume builder. I wanted a stateless endpoint I could call from a workflow: POST a master resume and a job description, get back a PDF that already speaks that job's language.

So I built one.

## What the API actually does

The whole idea is the **master-and-child** model.

You keep one **master resume** in the system — your full career, every project, every skill, every bullet. That's your source of truth, and it never gets mutated by an automation.

For each job, the API creates a **child resume**: a copy of the master with small, targeted tweaks. The agent (you, your n8n workflow, your LLM) tells the API *which keywords to emphasize, which bullets to surface, which projects to lead with*. The child is rendered to its own PDF and shipped back. Your master is untouched.

The flow is roughly:

1. Create a master resume in the dashboard (or POST it via the API).
2. Send a job description — and optionally, a short list of tweaks — to `POST /api/tailored-resumes`.
3. The API stores the child resume, generates a PDF with Typst, and returns the file.
4. The agent attaches the PDF to the application.

You can do this with curl, with the n8n HTTP node, with a Python script, or with a LangChain tool call. The API doesn't care who's calling.

## The stack

| Layer | Choice | Why |
|---|---|---|
| Runtime | **Bun** | Fast startup, native TypeScript, built-in test runner, single-binary deploy |
| Framework | **Hono** | Tiny, standards-based Request/Response, runs anywhere |
| Database | **SQLite** | One file. Built into the image. Zero external services. |
| PDF engine | **Typst** | Markup-based, compiles fast, version-controllable templates |
| Auth | **API keys** | One key per agent, easy to rotate, no OAuth dance |
| UI | **Dashboard (Bun-served SPA)** | Manage resumes, preview PDFs, create keys in the browser |
| Deploy | **Docker** | One image, one command, one port |

The whole codebase lives in a single GitHub repo, split into `packages/api`, `packages/dashboard`, and `templates/`. Nothing in there is exotic. The interesting decisions are mostly about what to *leave out*.

## The interesting parts

### Why Typst, not LaTeX or a headless browser

Most resume-as-PDF tools end up either shipping a headless Chromium (slow, large image, fragile layout) or shelling out to LaTeX (fast output, but the toolchain is hostile). Typst sits in the middle: it compiles in milliseconds, the templates are version-controlled markup, and the binary is small.

The layout is the real win. I can write a template that says *lead with the first project, suppress the second, bold these specific skills, and only render the "Key Technologies" sidebar if the job description mentions "observability"* — all in plain code, all diffable, all running in the same Docker image as the API.

### Why SQLite, not Postgres

There is one writer, a small handful of readers, and a few hundred records in the heaviest realistic deployment (one resume per application for a year of job hunting). SQLite handles that with the engine off. Adding Postgres would mean another container, a connection string, migrations tooling, and a failure mode the moment DNS hiccups.

SQLite is a single file on a Docker volume. Backup it with `cp`. Restore it with `cp`. That's the whole operational story.

### Why API keys, not OAuth

This is a self-hosted tool called by *agents I control*. There's no third-party login, no public sign-up, no scope negotiation. Every caller — n8n, a Python script, a LangChain tool — gets an API key created in the dashboard. The key goes in an `Authorization: Bearer` header, the API hashes it, looks it up, and serves the request.

If a key leaks, you delete it in the dashboard and make a new one. That's the entire key-management UX.

### Why a dashboard at all

A pure API would have been fine for *me*. But "self-hosted" means other people too, and "create a master resume as JSON in a config file" is a hard onboarding cliff. The dashboard exists to do exactly three things:

- Edit a master resume in a form, not a JSON file
- Preview a child PDF before you wire the API into a workflow
- Mint and revoke API keys

Anything beyond that is scope creep.

## The end-to-end call

Here's the actual shape of an integration. From my n8n workflow, after the skill-gap agent scores a job above the cutoff, an HTTP Request node calls the API:

```http
POST /api/tailored-resumes
Authorization: Bearer apr_live_••••••••
Content-Type: application/json

{
  "masterResumeId": "primary",
  "jobDescription": "<full JD text from the LinkedIn scraper>",
  "emphasis": [
    "kubernetes",
    "observability",
    "platform engineering"
  ]
}
```

The response is a PDF binary. The next node writes it to the application tracker in Google Drive, alongside the skill-gap report the agent already produced.

Total added nodes in the workflow: three (an `IF` for the score cutoff, the HTTP Request, and the Google Drive upload). The whole thing runs in a couple of seconds end-to-end.

If you'd rather call it from Python, it's a `requests.post` with a Bearer header. If you'd rather call it from an LLM agent, register it as a tool with a JSON schema for the request body and let the model fill it in. The API doesn't know or care.

## Self-hosting in one command

The whole point of "one Docker image" is that the runbook is short:

```bash
docker compose up -d
```

That's it. The image includes Bun, Typst, the compiled API binary, the dashboard assets, and a fresh SQLite file. The first time it boots, it generates an admin API key and prints it to the logs:

```bash
docker compose logs api | grep "API key"
```

Open `http://localhost:3000`, paste the key when prompted, create a master resume, and you're generating tailored PDFs. For production you put it behind Caddy (or your reverse proxy of choice) for HTTPS and call it a day.

## What this isn't

It's not an ATS-scoring tool, not a job-board aggregator, and not a replacement for an actual job application. It's a single, well-scoped endpoint that solves one problem — *turn this master resume into a job-specific PDF* — and gets out of the way.

If you want a scraper, write one (or use mine). If you want a skill-gap analyzer, run an LLM agent. If you want to apply to the job, you still have to do that. This is the piece in the middle that takes the agent's decision and produces the deliverable.

## What I'd add next

Nothing, for now. The project does what I built it to do, and I'd rather not bloat it with features nobody's asked for. If something genuinely useful shows up, I'll add it. Until then, the code is the smallest thing that solves the problem.

---

The code is open source under MIT: [github.com/AjinkyaGokhale/apimyresume](https://github.com/AjinkyaGokhale/apimyresume). Issues and PRs welcome. If you wire it into your own job-hunt pipeline, I'd love to hear what you do with it.
