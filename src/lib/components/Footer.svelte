<script>
  import { t } from '$lib/i18n';

  const year = new Date().getFullYear();

  const nav = [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/projects', key: 'projects' },
    { href: '/blog', key: 'blog' },
    { href: '/inspiration', key: 'inspiration' },
    { href: '/workbench', key: 'workbench' }
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/AjinkyaGokhale' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gokhaleajinkya/' },
    { label: 'Email', href: 'mailto:hi@ajinkyagokhale.com' }
  ];

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="relative z-10 mt-24 border-t border-line bg-paper-2/40">
  <div class="shell py-14">
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
      <!-- Brand -->
      <div class="max-w-xs">
        <img src="/static/agok.dev.svg" alt="agok.dev" class="h-7 w-auto" />
        <p class="mt-4 font-body text-sm leading-relaxed text-ink-2">{$t.footerMeta.tagline}</p>
        <a
          href="mailto:hi@ajinkyagokhale.com"
          class="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 font-body text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
          hi@ajinkyagokhale.com
        </a>
      </div>

      <!-- Explore -->
      <nav aria-label="Footer">
        <p class="eyebrow">{$t.footerMeta.explore}</p>
        <ul class="mt-4 space-y-2.5">
          {#each nav as link}
            <li>
              <a
                href={link.href}
                class="font-body text-sm text-ink-2 transition-colors hover:text-accent"
                >{$t.nav[link.key]}</a
              >
            </li>
          {/each}
        </ul>
      </nav>

      <!-- Elsewhere -->
      <nav aria-label="Social">
        <p class="eyebrow">{$t.footerMeta.elsewhere}</p>
        <ul class="mt-4 space-y-2.5">
          {#each socials as link}
            <li>
              <a
                href={link.href}
                rel="noopener"
                class="group inline-flex items-center gap-1.5 font-body text-sm text-ink-2 transition-colors hover:text-accent"
              >
                {link.label}
                <span
                  class="text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true">↗</span
                >
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <!-- Bottom bar -->
    <div
      class="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <p class="font-body text-xs text-ink-3">
        © {year} Ajinkya Gokhale · {$t.footer.made}
        <span class="text-accent">♥</span>
        {$t.footer.in}
      </p>
      <button
        type="button"
        onclick={toTop}
        class="inline-flex items-center gap-1.5 self-start font-body text-xs font-semibold text-ink-2 transition-colors hover:text-accent sm:self-auto"
      >
        {$t.footerMeta.backToTop}
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  </div>
</footer>
