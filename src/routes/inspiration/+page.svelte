<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
  import Seo from '$lib/components/Seo.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { people, reading } from '$lib/data/inspiration';

  const initials = (name) =>
    name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  // When an external image 404s (no avatar/cover), hide it so the
  // monogram / placeholder underneath shows through.
  const hideOnError = (event) => {
    event.currentTarget.style.display = 'none';
  };
</script>

<Seo
  title="Inspiration — Ajinkya Gokhale"
  path="/inspiration"
  description="People, sites and reading that inspire Ajinkya Gokhale."
/>

<PageHeader eyebrow="Inspiration" title={$t.inspiration.title} intro={$t.inspiration.intro} />

<section class="shell pt-12" use:reveal>
  <h2 class="font-display text-2xl font-semibold text-ink">{$t.inspiration.peopleTitle}</h2>
  <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each people as person}
      <a
        href={`https://${person.handle}`}
        target="_blank"
        rel="noopener noreferrer"
        class="group block rounded-2xl border border-line bg-paper-2 p-5 shadow-card transition-colors hover:border-accent/40"
      >
        <div class="flex items-center gap-3.5">
          <div
            class="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-paper font-display text-sm font-semibold text-ink-2"
          >
            <span aria-hidden="true">{initials(person.name)}</span>
            <img
              src={person.avatar}
              alt={person.name}
              loading="lazy"
              on:error={hideOnError}
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div class="min-w-0">
            <p class="font-display text-lg font-semibold leading-tight text-ink">{person.name}</p>
            <p class="mt-0.5 font-body text-sm font-semibold text-accent group-hover:underline">
              {person.handle}
            </p>
          </div>
        </div>
        <p class="mt-3 font-body text-sm text-ink-2">{person.note}</p>
      </a>
    {/each}
  </div>
</section>

<section class="shell pt-12" use:reveal>
  <h2 class="font-display text-2xl font-semibold text-ink">{$t.inspiration.readingTitle}</h2>
  <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each reading as item}
      <svelte:element
        this={item.link ? 'a' : 'div'}
        href={item.link}
        target={item.link ? '_blank' : undefined}
        rel={item.link ? 'noopener noreferrer' : undefined}
        class="group flex gap-4 rounded-2xl border border-line bg-paper-2 p-4 shadow-card transition-colors hover:border-accent/40"
      >
        <div
          class="relative grid h-24 w-16 shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-paper"
        >
          <span
            aria-hidden="true"
            class="px-1 text-center font-display text-[0.65rem] font-semibold uppercase tracking-wide text-ink-3"
            >{item.kind}</span
          >
          {#if item.cover}
            <img
              src={item.cover}
              alt={item.title}
              loading="lazy"
              on:error={hideOnError}
              class="absolute inset-0 h-full w-full object-cover"
            />
          {/if}
        </div>
        <div class="flex min-w-0 flex-col">
          <p class="font-body font-semibold text-ink group-hover:text-accent">{item.title}</p>
          <p class="mt-0.5 font-body text-sm text-ink-3">{item.author}</p>
          <span
            class="mt-auto w-fit rounded-full border border-line px-2.5 py-0.5 font-body text-xs font-medium text-ink-2"
            >{item.kind}</span
          >
        </div>
      </svelte:element>
    {/each}
  </div>
</section>
