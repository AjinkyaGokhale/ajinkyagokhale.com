<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
  import PostCard from '$lib/components/PostCard.svelte';

  let { posts = [] } = $props();
</script>

<section class="shell py-12 md:py-16" use:reveal>
  <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div>
      <p class="eyebrow">{$t.home.blogEyebrow}</p>
      <h2 class="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{$t.home.blogTitle}</h2>
      <p class="mt-2 max-w-md font-body text-ink-2">{$t.home.blogDesc}</p>
    </div>
    <a
      href="/blog"
      class="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-body text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {$t.home.blogAll}
      <span aria-hidden="true">→</span>
    </a>
  </div>

  {#if posts.length}
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {#each posts as post}
        <PostCard {post} />
      {/each}
    </div>
  {:else}
    <p class="font-body text-ink-3">{$t.home.empty}</p>
  {/if}
</section>
