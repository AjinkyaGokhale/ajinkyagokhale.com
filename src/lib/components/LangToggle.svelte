<script>
  import { lang, toggleLang } from '$lib/i18n';
</script>

<button
  type="button"
  onclick={toggleLang}
  class="group flex items-center gap-1 rounded-full border border-line bg-paper-2/60 px-2.5 py-1 font-body text-xs font-semibold tracking-wide text-ink-2 transition-colors hover:border-accent/40 hover:text-ink"
  aria-label="Toggle language"
>
  <span class={$lang === 'en' ? 'text-accent' : ''}>EN</span>
  <span class="text-line">/</span>
  <span class={$lang === 'de' ? 'text-accent' : ''}>DE</span>
</button>
