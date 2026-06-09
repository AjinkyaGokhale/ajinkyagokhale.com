<script>
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import LangToggle from './LangToggle.svelte';

  let open = $state(false);

  const links = [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/projects', key: 'projects' },
    { href: '/blog', key: 'blog' },
    { href: '/inspiration', key: 'inspiration' },
    { href: '/workbench', key: 'workbench' }
  ];

  function isActive(href, current) {
    return href === '/' ? current === '/' : current.startsWith(href);
  }
</script>

<header class="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
  <nav class="shell flex h-16 items-center justify-between gap-4">
    <a href="/" class="group flex items-center" aria-label="Ajinkya Gokhale — Home">
      <img
        src="/static/agok.dev.svg"
        alt="agok.dev"
        class="h-7 w-auto transition-opacity group-hover:opacity-60"
      />
    </a>

    <div class="hidden items-center gap-1 md:flex">
      {#each links as link}
        <a
          href={link.href}
          aria-current={isActive(link.href, $page.url.pathname) ? 'page' : undefined}
          class="relative rounded-full px-3 py-1.5 font-body text-sm font-medium transition-colors hover:text-ink
            {isActive(link.href, $page.url.pathname) ? 'text-ink' : 'text-ink-2'}"
        >
          {$t.nav[link.key]}
          {#if isActive(link.href, $page.url.pathname)}
            <span class="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"></span>
          {/if}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-2">
      <LangToggle />
      <button
        type="button"
        class="grid h-9 w-9 place-items-center rounded-full border border-line text-ink md:hidden"
        aria-label="Menu"
        aria-expanded={open}
        onclick={() => (open = !open)}
      >
        <span class="relative block h-3 w-4">
          <span
            class="absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform {open
              ? 'translate-y-[5px] rotate-45'
              : ''}"
          ></span>
          <span
            class="absolute left-0 top-[5px] h-0.5 w-4 bg-ink transition-opacity {open
              ? 'opacity-0'
              : ''}"
          ></span>
          <span
            class="absolute left-0 top-[10px] h-0.5 w-4 bg-ink transition-transform {open
              ? '-translate-y-[5px] -rotate-45'
              : ''}"
          ></span>
        </span>
      </button>
    </div>
  </nav>

  {#if open}
    <div class="border-t border-line/70 bg-paper md:hidden">
      <div class="shell flex flex-col py-3">
        {#each links as link}
          <a
            href={link.href}
            onclick={() => (open = false)}
            aria-current={isActive(link.href, $page.url.pathname) ? 'page' : undefined}
            class="rounded-lg px-3 py-2.5 font-body text-base font-medium transition-colors
              {isActive(link.href, $page.url.pathname)
              ? 'bg-paper-2 text-accent'
              : 'text-ink-2 hover:bg-paper-2'}"
          >
            {$t.nav[link.key]}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
