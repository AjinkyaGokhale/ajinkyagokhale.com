<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
  import Seo from '$lib/components/Seo.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { workbench } from '$lib/data/workbench';
</script>

<Seo title="Workbench — Ajinkya Gokhale" path="/workbench" description="The tools, languages and gear Ajinkya Gokhale builds with." />

<PageHeader eyebrow="On my bench" title={$t.workbench.title} intro={$t.workbench.intro} />

<div class="shell grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2">
  {#each workbench as section, i}
    <div
      class="rounded-3xl border border-line bg-paper-2 p-6 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/40"
      use:reveal={{ delay: i * 60 }}
    >
      <div class="flex items-baseline justify-between gap-3">
        <h2 class="font-display text-xl font-semibold text-ink">{section.group}</h2>
        <span class="font-display text-2xl font-semibold text-accent/25">{String(i + 1).padStart(2, '0')}</span>
      </div>
      <p class="mt-1 font-body text-sm italic text-ink-3">{section.note}</p>
      <ul class="mt-4 flex flex-wrap gap-2">
        {#each section.items as item}
          <li class="rounded-full border border-line bg-paper px-3 py-1 font-body text-sm text-ink-2">{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
