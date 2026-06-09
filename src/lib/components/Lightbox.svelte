<script>
  import { fade } from 'svelte/transition';

  // Wraps rendered post content and turns every <img> inside into a clickable
  // trigger that opens the image full-screen. Markup for the images comes from
  // markdown (mdsvex), so they're enhanced at mount via a DOM action rather than
  // authored with handlers.
  let { children } = $props();

  let open = $state(false);
  let src = $state('');
  let alt = $state('');

  function openImage(node) {
    src = node.currentSrc || node.src;
    alt = node.alt || '';
    open = true;
  }

  function enhance(node) {
    const imgs = node.querySelectorAll('img');
    const onClick = (e) => openImage(e.currentTarget);
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openImage(e.currentTarget);
      }
    };
    imgs.forEach((img) => {
      img.style.cursor = 'zoom-in';
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      img.setAttribute('aria-label', `View image full screen: ${img.alt || 'image'}`);
      img.addEventListener('click', onClick);
      img.addEventListener('keydown', onKey);
    });
    return {
      destroy() {
        imgs.forEach((img) => {
          img.removeEventListener('click', onClick);
          img.removeEventListener('keydown', onKey);
        });
      }
    };
  }

  const close = () => (open = false);

  function onWindowKey(e) {
    if (open && e.key === 'Escape') close();
  }

  // Lock background scroll while the overlay is open.
  $effect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  });
</script>

<svelte:window onkeydown={onWindowKey} />

<div use:enhance>
  {@render children()}
</div>

{#if open}
  <div
    class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
    role="dialog"
    aria-modal="true"
    aria-label={alt || 'Image preview'}
    transition:fade={{ duration: 150 }}
  >
    <button
      type="button"
      class="absolute inset-0 h-full w-full cursor-zoom-out"
      aria-label="Close image"
      onclick={close}
    ></button>
    <img
      {src}
      {alt}
      class="relative max-h-[92vh] max-w-[94vw] rounded-lg object-contain shadow-lift"
    />
    <button
      type="button"
      onclick={close}
      aria-label="Close"
      class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 font-body text-lg text-ink shadow-card transition-colors hover:bg-paper"
    >
      ✕
    </button>
  </div>
{/if}
