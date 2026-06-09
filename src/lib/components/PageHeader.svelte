<script>
  import { reveal } from '$lib/actions/reveal';
  let { eyebrow = '', title, intro = '' } = $props();
</script>

<section class="shell pt-12 md:pt-16" use:reveal>
  {#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
  <h1
    class="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl"
  >
    {title}
  </h1>
  {#if intro}<p class="prose-warm mt-5">{intro}</p>{/if}
</section>
