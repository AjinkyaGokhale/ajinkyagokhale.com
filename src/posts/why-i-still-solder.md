---
title: Why I still solder my own boards
date: '2026-03-28'
excerpt: Cloud pays the bills, but the bench keeps me honest. A short case for staying close to the hardware.
cover: /img/blog/why-solder.svg
category: 'Hardware'
tags: ['Hardware', 'Craft']
readingTime: 4
published: true
---

Most of my work lives in the cloud now — Lambdas, queues, dashboards. But I keep
a soldering iron warm, and I think it makes me a better engineer.

## Hardware doesn't let you hand-wave

In software you can paper over a bad assumption with a retry or a bigger
instance. A board doesn't care. If your power rail sags, the chip browns out. If
your trace is too thin, it heats up. The feedback is immediate and physical, and
it teaches a kind of honesty that's easy to lose behind an abstraction.

## The whole stack, end to end

There's a particular satisfaction in tracing a single reading — from a sensor I
chose, on a PCB I laid out, through firmware I wrote, into a pipeline I built,
onto a screen someone actually looks at. Owning the whole path changes how you
design every piece of it.

So the bench stays. It's slower, it's messier, and it keeps me close to the thing
the software is ultimately *for*.
