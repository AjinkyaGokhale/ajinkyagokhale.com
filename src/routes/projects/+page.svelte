<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
  import Seo from '$lib/components/Seo.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';

  const projects = $derived($t.projects.projects);
  const categories = $derived($t.projects.skillCategories);
</script>

<Seo title="Projects — Ajinkya Gokhale" path="/projects" description="Selected projects by Ajinkya Gokhale — IoT platforms, serverless applications and computer vision." />

<PageHeader eyebrow="Selected work" title="Projects" intro="Things I've designed, built and shipped — from IoT fleets to serverless platforms." />

<div class="shell space-y-5 pt-12">
  {#each projects as project, i}
    <article
      class="group rounded-3xl border border-line bg-paper-2 p-7 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
      use:reveal={{ delay: i * 60 }}
    >
      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 class="font-display text-2xl font-semibold text-ink">
          {#if project.link}
            <a href={project.link} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-accent">{project.name}</a>
          {:else}
            {project.name}
          {/if}
        </h2>
        <span class="font-body text-sm text-ink-3">{project.period}</span>
      </div>
      <p class="mt-1 font-body text-sm font-semibold text-accent">{project.subtitle}</p>
      {#if project.link}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2 inline-flex items-center gap-1 font-body text-sm font-semibold text-accent transition-opacity hover:opacity-70"
        >
          Visit site
          <span aria-hidden="true">↗</span>
        </a>
      {/if}
      <p class="prose-warm mt-4 max-w-none">{project.desc}</p>
      <ul class="mt-4 space-y-2">
        {#each project.bullets as bullet}
          <li class="flex gap-3 font-body text-sm text-ink-2">
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"></span>
            <span>{bullet}</span>
          </li>
        {/each}
      </ul>
      <div class="mt-5 flex flex-wrap gap-1.5">
        {#each project.tags as tag}
          <span class="rounded-full border border-line px-2.5 py-0.5 font-body text-xs font-medium text-ink-3">{tag}</span>
        {/each}
      </div>
    </article>
  {/each}
</div>

<section class="shell pt-14" use:reveal>
  <h2 class="font-display text-2xl font-semibold text-ink">Technical toolkit</h2>
  <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each categories as cat}
      <div class="rounded-2xl border border-line bg-paper-2 p-5">
        <p class="font-body text-sm font-semibold text-accent">{cat.label}</p>
        <p class="mt-2 font-body text-sm leading-relaxed text-ink-2">{cat.items}</p>
      </div>
    {/each}
  </div>
</section>
