---
title: 'How I auto-grade job fit with n8n and DeepSeek'
date: '2026-06-09'
excerpt: 'A LinkedIn job scraper, a relevance-scoring agent, a skill-gap analyser, and a report file. One webhook, no manual filtering.'
cover: '/img/blog/n8n/linkedin-job-scapper-market-skill-gap.png'
tags: ['n8n', 'Automation', 'AI', 'Jobs']
readingTime: 5
published: true
---

Job hunting has a filtering problem. Hundreds of listings, mostly
irrelevant, and the only way to find the good ones is to read them
all. I got tired of that, so I built an n8n workflow that does the
filtering for me — and writes a personalised skill-gap report for
the listings that survive.

The whole thing runs from a single Webhook. Push a LinkedIn search
URL in, get a graded list of jobs back, with a per-listing report
on what I'm missing.

## What the flow does

The workflow has two parallel paths off the Webhook. One scrapes
the job listings from LinkedIn, normalises them, and upserts them
into a database. The other fetches my resume as a document. The
two streams meet at a Combiner, which hands the (jobs × resume)
pair to an AI agent that does the first round of filtering.

That agent is the `relevance-checking-agent`, backed by DeepSeek.
Its job is small and well-scoped: read the job, read my resume,
return a single relevance score. A Code node parses the score into
a number, and an `If` node routes the result. Low-relevance
listings get marked as processed and dropped. High-relevance ones
get pulled into a deeper analysis.

The second pass is the `skill-gap-analysis-agent`, also DeepSeek.
This one is the workhorse — it reads the same pair, but instead
of just scoring, it identifies the specific skills, tools, and
experiences the job wants that my resume doesn't show. Its output
goes through one more JavaScript transform, gets upserted into
the database, and lands in a Google Doc that I can read at a
glance.

Twenty nodes, two AI agents, one report file.

## Why the two-stage design

The first version of this workflow skipped the relevance check
and ran the skill-gap analysis on every scraped listing. That
worked, but it was wasteful — the deeper analysis is the
expensive call, and most of the jobs I scrape aren't worth it.
Splitting the work into a cheap filter and an expensive analysis
meant I pay the model bill only on the listings that actually
matter.

The other reason is signal. A single agent asked to do both
"is this relevant" and "what am I missing" tends to blur the
two. By separating them, each prompt has one job, and the
output is cleaner.

## The agents are mostly prompts

Like the mail checker, most of the design effort went into the
prompts, not the wiring. The relevance prompt is short — a few
sentences asking the model to return a JSON object with a
`score` field. The skill-gap prompt is longer, with explicit
sections for *required skills missing*, *preferred skills
missing*, and *experience gaps*. The structure matters because
the downstream Code node parses the output, and a free-form
paragraph doesn't survive that.

The other detail worth mentioning: both agents share the same
DeepSeek model. I tried a bigger model for the skill-gap agent
and the output wasn't meaningfully better. The bottleneck isn't
model size, it's prompt quality. Save the tokens and use a
fast, cheap model — the structure of the work matters more than
the cleverness of the model.

## What I'd add next

A Slack notification on the final report, so I get pinged the
moment a high-relevance job lands. And a small filter on the
front of the workflow that drops jobs older than 24 hours, so
the database doesn't fill up with stale listings.

The workflow is the kind of automation that pays for itself the
first time it catches a job I would have missed. Most weeks it
runs in the background and I forget about it. The weeks it
surfaces something good, I remember why I built it.
