<script>
  import { t } from '$lib/i18n';
  import Seo from '$lib/components/Seo.svelte';
  import { reveal } from '$lib/actions/reveal';

  let { data } = $props();
  const Content = $derived(data.content);
  const meta = $derived(data.meta);

  const formatted = (d) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<Seo
  title="{meta.title} — Ajinkya Gokhale"
  path="/blog/{data.slug}"
  description={meta.excerpt}
  image={meta.cover ?? '/img/avatar.png'}
  type="article"
/>

<article class="shell pt-12 md:pt-16">
  <a href="/blog" class="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ink-2 transition-colors hover:text-accent">
    <span aria-hidden="true">←</span> {$t.blog.title}
  </a>

  <header class="mt-6 max-w-read" use:reveal>
    <div class="flex flex-wrap items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-ink-3">
      <time datetime={meta.date}>{formatted(meta.date)}</time>
      {#if meta.readingTime}<span>·</span><span>{meta.readingTime} min read</span>{/if}
    </div>
    <h1 class="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">{meta.title}</h1>
    {#if meta.excerpt}<p class="prose-warm mt-4">{meta.excerpt}</p>{/if}
    <div class="mt-5 flex flex-wrap gap-1.5">
      {#each meta.tags ?? [] as tag}
        <span class="rounded-full border border-line px-2.5 py-0.5 font-body text-xs font-medium text-ink-3">{tag}</span>
      {/each}
    </div>
  </header>

  <div class="prose-warm mt-10">
    <Content />
  </div>
</article>
