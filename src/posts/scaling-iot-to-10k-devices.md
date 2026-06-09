---
title: Scaling an IoT fleet to 10,000 devices on AWS
date: '2026-05-12'
excerpt: Notes from growing the Stromleser platform — what broke, what held, and the boring decisions that mattered most.
cover: /img/blog/scaling-iot.svg
category: 'Systems'
tags: ['IoT', 'AWS', 'Systems']
readingTime: 6
published: true
---

When you have a hundred devices in the field, almost anything works. A single
EC2 box, a cron job, a database you SSH into when something looks off. The
trouble starts somewhere around the first few thousand, when the shortcuts you
took quietly become the architecture.

## The boring decisions mattered most

The flashy parts — real-time dashboards, fancy alerting — were never the
bottleneck. What kept the fleet healthy was a handful of unglamorous choices:

- **Idempotent ingestion.** Devices retry. Networks drop. Every message had to
  be safe to process twice.
- **Backpressure at the edge.** A device that can't reach the cloud should buffer
  and slow down, not hammer the endpoint.
- **One source of truth for device state.** No clever caching layers until the
  base case was provably correct.

## What broke

DynamoDB hot partitions, mostly. A naive partition key meant a few thousand
chatty devices landed on the same shard. The fix was unglamorous — a better key
and a little jitter — but finding it took a week of staring at CloudWatch.

## What I'd tell past me

Instrument before you scale. The teams that struggle aren't the ones with the
wrong architecture; they're the ones who can't *see* what their system is doing
when it's under load.
