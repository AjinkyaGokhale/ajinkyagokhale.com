<script>
  import { t } from '$lib/i18n';
  import Seo from '$lib/components/Seo.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import { reveal } from '$lib/actions/reveal';

  let { data } = $props();
</script>

<Seo title="Blog — Ajinkya Gokhale" path="/blog" description="Notes on engineering, IoT and building things, by Ajinkya Gokhale." />

<PageHeader eyebrow="Writing" title={$t.blog.title} intro={$t.blog.intro} />

<div class="shell pt-12">
  {#if data.posts.length}
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2" use:reveal>
      {#each data.posts as post}
        <PostCard {post} />
      {/each}
    </div>
  {:else}
    <p class="font-body text-ink-3">{$t.home.empty}</p>
  {/if}
</div>
