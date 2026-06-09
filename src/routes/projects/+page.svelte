<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
  import Seo from '$lib/components/Seo.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';

  const projects = $derived($t.projects.projects);
  const categories = $derived($t.projects.skillCategories);

  // Category accent tints, carried over from the homepage bento.
  const tints = [
    {
      num: 'text-pine/40',
      dot: 'bg-pine',
      text: 'text-pine',
      hover: 'hover:border-pine/40',
      badge: 'bg-pine/10 text-pine'
    },
    {
      num: 'text-ochre/45',
      dot: 'bg-ochre',
      text: 'text-ochre',
      hover: 'hover:border-ochre/40',
      badge: 'bg-ochre/10 text-ochre'
    },
    {
      num: 'text-accent/35',
      dot: 'bg-accent',
      text: 'text-accent',
      hover: 'hover:border-accent/40',
      badge: 'bg-accent/10 text-accent'
    }
  ];
  const skillTints = ['text-accent', 'text-pine', 'text-ochre'];
  const pad = (n) => String(n).padStart(2, '0');

  // Group projects by category, preserving first-appearance order and the
  // global index (used for numbering + accent tint).
  const grouped = $derived.by(() => {
    const order = [];
    const map = new Map();
    projects.forEach((project, i) => {
      const key = project.category ?? '';
      if (!map.has(key)) {
        map.set(key, []);
        order.push(key);
      }
      map.get(key).push({ project, i });
    });
    return order.map((category) => ({ category, items: map.get(category) }));
  });
</script>

<Seo
  title="Projects — Ajinkya Gokhale"
  path="/projects"
  description="Selected projects by Ajinkya Gokhale — IoT platforms, serverless applications and computer vision."
/>

<PageHeader
  eyebrow="Selected work"
  title="Projects"
  intro="Things I've designed, built and shipped — from IoT fleets to serverless platforms."
/>

<!-- Projects — grouped by category into two-column grids. -->
{#each grouped as group, gi}
  <section class="shell {gi === 0 ? 'pt-12' : 'pt-14'}" use:reveal>
    <h2 class="font-display text-2xl font-semibold text-ink">{group.category}</h2>
    <div class="mt-5 grid grid-cols-2 gap-5">
      {#each group.items as { project, i } (project.name)}
        {@const tint = tints[i % tints.length]}
        <article
          class="group flex flex-col overflow-hidden rounded-3xl border border-line bg-paper-2 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 {tint.hover} hover:shadow-lift"
          use:reveal={{ delay: i * 60 }}
        >
          {#if project.image}
            <div
              class="relative aspect-square overflow-hidden border-b border-line {project.imageFit ===
              'contain'
                ? 'bg-paper-3'
                : ''}"
            >
              <img
                src={project.image}
                alt={project.name}
                class="h-full w-full transition-transform duration-500 ease-soft group-hover:scale-[1.03] {project.imageFit ===
                'contain'
                  ? 'object-contain'
                  : 'object-cover object-top'}"
                loading="lazy"
              />
            </div>
          {/if}

          <div class="flex flex-1 flex-col p-7">
            <div class="flex flex-wrap items-center gap-3">
              <span class="font-display text-3xl font-semibold {tint.num}">{pad(i + 1)}</span>
              {#if project.status}
                <span
                  class="rounded-full {tint.badge} px-2.5 py-0.5 font-body text-xs font-semibold uppercase tracking-wider"
                  >{project.status}</span
                >
              {/if}
              <span class="ml-auto font-body text-xs text-ink-3">{project.period}</span>
            </div>

            <h2 class="mt-4 font-display text-xl font-semibold text-ink">
              {#if project.link}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-colors hover:text-accent">{project.name}</a
                >
              {:else}
                {project.name}
              {/if}
            </h2>
            <p class="mt-1 font-body text-sm font-semibold {tint.text}">{project.subtitle}</p>

            {#if project.metrics}
              <dl class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {#each project.metrics as m}
                  <div>
                    <dt class="font-display text-xl font-semibold text-ink">{m.value}</dt>
                    <dd class="font-body text-[0.7rem] uppercase tracking-wider text-ink-3">
                      {m.label}
                    </dd>
                  </div>
                {/each}
              </dl>
            {/if}

            {#if project.bullets}
              <ul class="mt-4 space-y-1.5">
                {#each project.bullets as bullet}
                  <li class="flex gap-2.5 font-body text-sm text-ink-2">
                    <span class="mt-2 h-1 w-1 shrink-0 rounded-full {tint.dot}"></span>
                    <span>{bullet}</span>
                  </li>
                {/each}
              </ul>
            {/if}

            <div class="mt-5 flex flex-wrap gap-1.5">
              {#each project.tags as tag}
                <span
                  class="rounded-full border border-line px-2.5 py-0.5 font-body text-xs font-medium text-ink-3"
                  >{tag}</span
                >
              {/each}
            </div>

            {#if project.link || project.repo}
              <div class="mt-auto flex flex-wrap gap-5 pt-5">
                {#if project.link}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 font-body text-sm font-semibold {tint.text} transition-opacity hover:opacity-70"
                  >
                    {$t.projects.visitCta}<span aria-hidden="true">↗</span>
                  </a>
                {/if}
                {#if project.repo}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 font-body text-sm font-semibold text-ink-2 transition-colors hover:text-ink"
                  >
                    {$t.projects.codeCta}<span aria-hidden="true">↗</span>
                  </a>
                {/if}
              </div>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </section>
{/each}

<section class="shell pt-14" use:reveal>
  <h2 class="font-display text-2xl font-semibold text-ink">Technical toolkit</h2>
  <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each categories as cat, i}
      <div class="rounded-2xl border border-line bg-paper-2 p-5">
        <p class="font-body text-sm font-semibold {skillTints[i % skillTints.length]}">
          {cat.label}
        </p>
        <p class="mt-2 font-body text-sm leading-relaxed text-ink-2">{cat.items}</p>
      </div>
    {/each}
  </div>
</section>
