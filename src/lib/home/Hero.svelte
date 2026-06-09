<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="shell pt-12 pb-8 md:pt-20 md:pb-12">
  <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
    <!-- Hero illustration -->
    <div class="order-1 md:order-2" use:reveal>
      <figure class="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem]">
        <div
          class="relative aspect-square overflow-hidden rounded-3xl border border-line bg-accent/[0.06]"
        >
          <!-- soft colour blobs for depth -->
          <div
            class="pointer-events-none absolute -right-8 -top-10 h-44 w-44 rounded-full bg-accent/15 blur-2xl"
          ></div>
          <div
            class="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-pine/10 blur-2xl"
          ></div>
          <img
            src="/img/doodle-torso.png"
            alt="Illustration of Ajinkya working on a laptop"
            class="relative h-full w-full object-contain p-7 sm:p-9"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        <figcaption
          class="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-line bg-paper/95 px-3 py-1.5 font-body text-xs font-semibold text-ink shadow-card backdrop-blur"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50"
            ></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
          Available · Oct 2026
        </figcaption>
      </figure>
    </div>

    <!-- Greeting · what I am · summary -->
    <div class="order-2 md:order-1" use:reveal>
      <p class="eyebrow flex items-center gap-2">
        <span class="inline-block origin-[70%_70%] animate-wave text-base">👋</span>
        {$t.home.greeting}
      </p>
      <h1
        class="mt-4 font-display text-[1.95rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl sm:leading-[1.04] md:text-[3.4rem]"
      >
        Software engineer —<br class="hidden sm:block" />
        <span class="text-accent">IoT, cloud &amp; systems.</span>
      </h1>
      <p class="prose-warm mt-6">{$t.home.summary}</p>
      <div class="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="/projects"
          class="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          See my work
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="mailto:hi@ajinkyagokhale.com"
          class="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-body text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Say hello
        </a>
      </div>
    </div>
  </div>
</section>
