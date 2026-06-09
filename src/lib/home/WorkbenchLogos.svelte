<script>
  // Tool logos that float gently in the Workbench card background.
  const logos = [
    { n: 'docker', x: 38, y: 7, s: 50, r: 6, d: 7.6 },
    { n: 'kubernetes', x: 70, y: 9, s: 44, r: -6, d: 6.0 },
    { n: 'cplusplus', x: 14, y: 16, s: 28, r: 4, d: 6.3 },
    { n: 'vscode', x: 46, y: 34, s: 44, r: -6, d: 6.7 },
    { n: 'python', x: 86, y: 30, s: 40, r: 8, d: 8.0 },
    { n: 'typescript', x: 60, y: 24, s: 34, r: -4, d: 5.5 },
    { n: 'go', x: 26, y: 30, s: 38, r: 5, d: 7.0 },
    { n: 'neovim', x: 9, y: 38, s: 32, r: 6, d: 5.8 },
    { n: 'n8n', x: 30, y: 50, s: 30, r: 7, d: 6.1 },
    { n: 'espressif', x: 62, y: 50, s: 30, r: -7, d: 6.9 },
    { n: 'prometheus', x: 90, y: 50, s: 30, r: 5, d: 6.6 },
    { n: 'git', x: 79, y: 54, s: 36, r: -8, d: 6.8 },
    { n: 'gnubash', x: 47, y: 62, s: 28, r: 7, d: 7.1 },
    { n: 'arduino', x: 64, y: 76, s: 30, r: -6, d: 7.4 },
    { n: 'raspberrypi', x: 80, y: 76, s: 38, r: 8, d: 8.2 },
    { n: 'terraform', x: 92, y: 72, s: 32, r: 6, d: 7.2 }
  ];
</script>

<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
  {#each logos as l, i}
    <span
      class="absolute animate-floaty"
      style="left:{l.x}%; top:{l.y}%; animation-duration:{l.d}s; animation-delay:-{(
        i * 0.6
      ).toFixed(1)}s;"
    >
      <img
        src="/img/logos/{l.n}.svg"
        alt=""
        loading="lazy"
        style="width:{l.s}px; transform:rotate({l.r}deg);"
        class="opacity-80 drop-shadow-sm"
      />
    </span>
  {/each}
</div>
