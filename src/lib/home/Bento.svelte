<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
  import WorkbenchLogos from './WorkbenchLogos.svelte';
  import CalendarFloat from './CalendarFloat.svelte';
</script>

<section class="shell py-12 md:py-16" use:reveal>
  <div class="mb-8 flex items-end justify-between gap-4">
    <div>
      <p class="eyebrow">{$t.home.snapshotEyebrow}</p>
      <h2 class="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        {$t.home.snapshotTitle}
      </h2>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4">
    <!-- Workbench — the big feature box with animated tool logos -->
    <a
      href="/workbench"
      class="group relative flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-paper-2 p-7 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift sm:col-span-2 lg:col-span-2 lg:row-span-2"
    >
      <WorkbenchLogos />
      <!-- keep the bottom-left text legible over the logos -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-paper-2 via-paper-2/70 to-transparent"
      ></div>
      <span class="relative z-10 font-display text-5xl font-semibold text-accent/30">01</span>
      <div class="relative z-10">
        <h3 class="font-display text-2xl font-semibold text-ink sm:text-3xl">
          {$t.home.cards.workbench.title}
        </h3>
        <p class="mt-2 max-w-sm font-body text-ink-2">{$t.home.cards.workbench.desc}</p>
        <span
          class="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent"
        >
          {$t.home.cards.workbench.cta}
          <span
            class="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true">→</span
          >
        </span>
      </div>
    </a>

    <!-- Learn more about me -->
    <a
      href="/about"
      class="group relative flex min-h-[11rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-paper-2 p-6 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
    >
      <span class="font-display text-3xl font-semibold text-pine/35">02</span>
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">{$t.home.cards.about.title}</h3>
        <p class="mt-1.5 font-body text-sm text-ink-2">{$t.home.cards.about.desc}</p>
        <span
          class="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-pine"
        >
          {$t.home.cards.about.cta}
          <span
            class="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true">→</span
          >
        </span>
      </div>
    </a>

    <!-- Projects -->
    <a
      href="/projects"
      class="group relative flex min-h-[11rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-paper-2 p-6 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
    >
      <span class="font-display text-3xl font-semibold text-ochre/45">03</span>
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">{$t.home.cards.projects.title}</h3>
        <p class="mt-1.5 font-body text-sm text-ink-2">{$t.home.cards.projects.desc}</p>
        <span
          class="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ochre"
        >
          {$t.home.cards.projects.cta}
          <span
            class="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true">→</span
          >
        </span>
      </div>
    </a>

    <!-- Book a call — wide CTA with a floating calendar -->
    <a
      href="mailto:hi@ajinkyagokhale.com"
      class="group relative flex min-h-[11rem] items-center justify-between gap-5 overflow-hidden rounded-3xl border border-line bg-paper-2 p-7 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift sm:col-span-2 lg:col-span-2"
    >
      <div class="relative z-10">
        <span class="font-display text-3xl font-semibold text-accent/30">04</span>
        <h3 class="mt-1 font-display text-xl font-semibold text-ink">{$t.home.cards.call.title}</h3>
        <p class="mt-1.5 max-w-xs font-body text-sm text-ink-2">{$t.home.cards.call.desc}</p>
        <span
          class="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4"
        >
          {$t.home.cards.call.cta}
          <span
            class="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true">→</span
          >
        </span>
      </div>
      <CalendarFloat />
    </a>
  </div>
</section>
