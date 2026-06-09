<script>
  import { t } from '$lib/i18n';
  let { post } = $props();

  const formatted = (d) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
</script>

<a
  href="/blog/{post.slug}"
  class="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-2 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
>
  {#if post.cover}
    <div class="aspect-[16/9] overflow-hidden border-b border-line bg-paper">
      <img
        src={post.cover}
        alt=""
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
      />
    </div>
  {/if}

  <div class="flex flex-1 flex-col p-6">
    <div
      class="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-ink-3"
    >
      <time datetime={post.date}>{formatted(post.date)}</time>
      {#if post.readingTime}<span>·</span><span>{post.readingTime} min</span>{/if}
    </div>
    <h3
      class="mt-3 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-accent"
    >
      {post.title}
    </h3>
    <p class="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-2">{post.excerpt}</p>
    <div class="mt-4 flex items-center justify-between">
      <div class="flex flex-wrap gap-1.5">
        {#each post.tags ?? [] as tag}
          <span
            class="rounded-full border border-line px-2 py-0.5 font-body text-[0.7rem] font-medium text-ink-3"
            >{tag}</span
          >
        {/each}
      </div>
      <span class="inline-flex items-center gap-1 font-body text-sm font-semibold text-accent">
        {$t.blog.readMore}
        <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"
          >→</span
        >
      </span>
    </div>
  </div>
</a>
