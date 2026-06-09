<script>
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
</script>

<section class="shell flex min-h-[60vh] flex-col items-center justify-center text-center">
  <p class="font-display text-7xl font-semibold text-accent">{$page.status}</p>
  <h1 class="mt-4 font-display text-2xl font-semibold text-ink">
    {$page.error?.message ?? 'Something went sideways'}
  </h1>
  <a
    href="/"
    class="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-semibold text-paper transition-colors hover:bg-accent"
  >
    <span aria-hidden="true">←</span>
    {$t.common.backHome}
  </a>
</section>
