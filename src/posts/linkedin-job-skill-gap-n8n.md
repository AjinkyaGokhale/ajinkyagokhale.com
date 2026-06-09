---
title: 'n8n LinkedIn job scraper: how I auto-grade job fit with DeepSeek'
date: '2026-06-09'
excerpt: 'A personal n8n LinkedIn job scraper workflow that scores each listing against my resume with DeepSeek, drops the noise, and writes a skill gap report for the jobs that survive.'
cover: '/img/blog/n8n/linkedin-job-scapper-market-skill-gap.png'
category: 'Automation'
tags: ['n8n', 'Automation', 'AI', 'Jobs']
readingTime: 5
published: true
---

![n8n LinkedIn job scraper workflow: webhook triggers a LinkedIn job scrape, DeepSeek scores each job for relevance, and a second DeepSeek agent produces a skill gap analysis that gets written to a Google Doc.](/img/blog/n8n/linkedin-job-scapper-market-skill-gap.png)

Job hunting has a filtering problem. Hundreds of listings, mostly
irrelevant, and the only way to find the good ones is to read them
all. I got tired of that, so I built an **n8n LinkedIn job
scraper** for myself. It reads each listing, scores it against
my resume with DeepSeek, and writes a skill gap report for the
jobs that pass the bar.

This is the workflow I actually use. It's not a tutorial dressed
up as a personal post — it's a personal post that happens to
show you the build, in case you want one too.

## What the n8n LinkedIn job scraper does

The workflow starts at a single Webhook node. I push a LinkedIn
search URL in and the workflow takes over. The Webhook branches
into two parallel paths: one scrapes the job listings, the other
fetches my resume as a document. Both paths land at a Combiner
node, which hands the (jobs × resume) pair to the first AI
agent.

That agent is the `relevance-checking-agent`, backed by DeepSeek.
It reads the job, reads my resume, and returns a single
relevance score. A small Code node parses the score into a
number, and an `If` node routes the result. Low-relevance
listings get marked as processed and dropped. High-relevance
ones move to the second pass.

The second pass is the `skill-gap-analysis-agent`, also DeepSeek.
It re-reads the same (job × resume) pair and produces a
structured breakdown of what's missing: required skills,
preferred skills, and experience gaps. The output goes through
one more JavaScript transform, gets upserted into the database,
and lands in a Google Doc I can read at a glance.

Twenty nodes, two AI agents, one report file. That's the whole
n8n LinkedIn job scraper.

## Why I split it into two agents

The first version of this workflow skipped the relevance check
and ran the skill gap analysis on every scraped listing. That
worked, but it was wasteful — the deeper analysis is the
expensive call, and most of the jobs I scrape aren't worth it.
Splitting the work into a cheap filter and an expensive analysis
meant I pay the model bill only on the listings that actually
matter.

The other reason is signal. A single agent asked to do both
"is this relevant" and "what am I missing" tends to blur the
two. By separating them, each prompt has one job, and the
output is cleaner.

## How it's wired

The node-by-node flow:

1. **Webhook** — POST endpoint, accepts a LinkedIn search URL
   as a query parameter.
2. **Set** — pulls the URL out of the webhook payload and sets
   it as a workflow variable.
3. **Scrape Jobs** — calls a scraper (Apify, Bright Data, or
   your own HTTP Request node pointing at a scraping actor)
   with the LinkedIn URL.
4. **Normalisation** — a Code node that flattens the scraper
   response into a clean JSON array of `{title, company,
   description, link}` objects.
5. **Upsert row(s)** — first database write, persists the
   scraped jobs.
6. **Andy-Resume** — a Google Drive node that pulls my resume
   as a document.
7. **Combiner** — merges the scraped jobs array with the resume
   document so the next agent sees both.
8. **relevance-checking-agent + DeepSeek Chat Model** — scores
   each job against the resume. Returns a JSON object with a
   `score` field.
9. **Parse Score** — extracts the score as a number.
10. **If** — branches on the score threshold.
11. **Delete row(s) / Update Processed** — one of two database
    operations depending on the branch.
12. **Prepare-Subflow-Data** — shapes the data for the second
    agent.
13. **skill-gap-analysis-agent + DeepSeek Chat Model** —
    produces the structured skill gap report.
14. **Code in JavaScript1** — flattens the agent's output.
15. **Upsert row(s)** — second database write, persists the
    report.
16. **Create a document / Update a document** — writes the
    final report to a Google Doc.

Each step is one or two minutes to wire up once you know what
the previous step is producing.

## The prompts do the real work

The wiring is straightforward. The hard part is the two system
prompts, and they're the reason this n8n LinkedIn job scraper
actually works.

**The relevance prompt** is short. It tells DeepSeek to read the
job description and the resume, compare them, and return a JSON
object with a single `score` field between 0 and 1. The shorter
this prompt is, the more reliably the model returns clean JSON.
Anything more elaborate and the model starts hedging with
paragraphs you then have to parse.

**The skill gap prompt** is longer, with explicit sections for
required skills missing, preferred skills missing, and
experience gaps. The structure matters because the downstream
Code node parses the output, and a free-form paragraph doesn't
survive that. Both prompts go in the system message, not the
user message, so they stay consistent across runs.

## What I'd add next

A Webhook out of the skill gap agent that hands the report to
[apimyresume.com](https://apimyresume.com) to generate a tailored
resume for each high-fit job. The skill gap tells me what to
fix; the tailored resume is the fix. Wire those two together
and the workflow goes from "tells me what to apply to" to
"tells me what to apply to and ships a custom resume" in one
webhook.

That's the n8n LinkedIn job scraper I actually run. Twenty
minutes of build time, no manual filtering, and a report file
that tells me, job by job, exactly what my resume is missing.
