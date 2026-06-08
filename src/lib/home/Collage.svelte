<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';

  // Overlapping photo collage — swap the placeholders for real photos in /static/img.
  const photos = [
    { src: '/img/collage/collage3.jpg', alt: 'University — linear algebra lecture, Stuttgart', cls: 'z-10 -rotate-6 sm:translate-y-6' },
    { src: '/img/collage/collage2.jpg', alt: 'Sponsored dev kit from Hackster.io — Cypress PSoC 4100S', cls: 'z-20 rotate-3 sm:-translate-y-2' },
    { src: '/img/collage/collage1.jpg', alt: 'Graduating — Diploma, Government Polytechnic Amravati', cls: 'z-30 -rotate-2 sm:translate-y-4' },
    { src: '/img/collage/collage4.jpg', alt: 'Travel — winter in the Alps', cls: 'z-20 rotate-5 sm:-translate-y-3' },
    { src: '/img/collage/collage6.jpg', alt: 'Prost — biergarten in Stuttgart', cls: 'z-10 -rotate-4 sm:translate-y-5' },
    { src: '/img/collage/collage5.jpg', alt: 'My first PC build', cls: 'z-20 rotate-2 sm:-translate-y-1' }
  ];
</script>

<section class="shell py-10 md:py-16" use:reveal>
  <div class="flex flex-wrap items-center justify-center gap-x-0 gap-y-4 px-2">
    {#each photos as photo, i}
      <div
        class="group relative aspect-[4/5] w-32 shrink-0 overflow-hidden rounded-2xl border-[3px] border-paper-2 bg-paper-2 shadow-lift transition-transform duration-500 ease-soft hover:z-40 hover:-translate-y-2 hover:rotate-0 sm:w-44 md:w-48 lg:w-52
          {photo.cls} {i > 0 ? '-ml-10 sm:-ml-12 lg:-ml-14' : ''} {i >= 3 ? 'hidden sm:block' : ''}"
        style="transition-delay: {i * 70}ms"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    {/each}
  </div>
  <p class="mt-8 text-center font-body text-sm italic text-ink-3">{$t.home.collageCaption}</p>
</section>
