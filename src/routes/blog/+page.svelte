<script>
  import { t } from '$lib/i18n';
  import Seo from '$lib/components/Seo.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import { reveal } from '$lib/actions/reveal';

  let { data } = $props();

  let query = $state('');
  let category = $state('all');
  let sort = $state('newest');

  // Category chips: "all" plus each distinct post category, in first-seen order.
  const categories = $derived([
    'all',
    ...[...new Set(data.posts.map((p) => p.category).filter(Boolean))]
  ]);

  const filtered = $derived.by(() => {
    const q = query.trim().toLowerCase();
    const list = data.posts.filter((post) => {
      if (category !== 'all' && post.category !== category) return false;
      if (!q) return true;
      const haystack = [post.title, post.excerpt, post.category, ...(post.tags ?? [])]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });

    const byDate = (dir) => (a, b) => dir * (new Date(a.date) - new Date(b.date));
    if (sort === 'oldest') return list.sort(byDate(1));
    if (sort === 'reading') return list.sort((a, b) => (a.readingTime ?? 0) - (b.readingTime ?? 0));
    return list.sort(byDate(-1));
  });
</script>

<Seo
  title="Blog — Ajinkya Gokhale"
  path="/blog"
  description="Notes on engineering, IoT and building things, by Ajinkya Gokhale."
/>

<PageHeader eyebrow="Writing" title={$t.blog.title} intro={$t.blog.intro} />

<div class="shell pt-12">
  <div class="flex flex-col gap-4" use:reveal>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
      <!-- Search -->
      <div class="relative flex-1">
        <span
          class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-body text-ink-3"
          aria-hidden="true">⌕</span
        >
        <input
          type="search"
          bind:value={query}
          placeholder={$t.blog.searchPlaceholder}
          aria-label={$t.blog.searchPlaceholder}
          class="w-full rounded-full border border-line bg-paper-2 py-2.5 pl-10 pr-4 font-body text-sm text-ink transition-colors placeholder:text-ink-3 focus:border-accent focus:outline-none"
        />
      </div>

      <!-- Sort -->
      <label class="flex shrink-0 items-center gap-2 font-body text-sm text-ink-3">
        {$t.blog.sortLabel}
        <select
          bind:value={sort}
          class="rounded-full border border-line bg-paper-2 py-2.5 pl-3.5 pr-8 font-body text-sm font-medium text-ink transition-colors focus:border-accent focus:outline-none"
        >
          <option value="newest">{$t.blog.sort.newest}</option>
          <option value="oldest">{$t.blog.sort.oldest}</option>
          <option value="reading">{$t.blog.sort.reading}</option>
        </select>
      </label>
    </div>

    <!-- Category filter -->
    {#if categories.length > 1}
      <div class="flex flex-wrap gap-2">
        {#each categories as cat (cat)}
          <button
            type="button"
            onclick={() => (category = cat)}
            aria-pressed={category === cat}
            class="rounded-full border px-3 py-1 font-body text-sm font-medium transition-colors {category ===
            cat
              ? 'border-accent bg-accent text-paper'
              : 'border-line bg-paper-2 text-ink-2 hover:border-accent/40 hover:text-ink'}"
          >
            {cat === 'all' ? $t.blog.allCategories : cat}
          </button>
        {/each}
      </div>
    {/if}
  </div>

  <p class="mt-6 font-body text-sm text-ink-3" aria-live="polite">
    {$t.blog.results(filtered.length)}
  </p>

  {#if filtered.length}
    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {#each filtered as post (post.slug)}
        <PostCard {post} />
      {/each}
    </div>
  {:else}
    <p class="mt-4 font-body text-ink-3">{$t.blog.noResults}</p>
  {/if}
</div>
