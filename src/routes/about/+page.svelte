<script>
  import { t } from '$lib/i18n';
  import { reveal } from '$lib/actions/reveal';
  import Seo from '$lib/components/Seo.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';

  const about = $derived($t.about);
</script>

<Seo title="About — Ajinkya Gokhale" path="/about" description="Background, skills and certifications of Ajinkya Gokhale, software engineer and founding engineer at Nineti GmbH." />

<PageHeader eyebrow="About" title={about.name} intro={about.roleText} />

<div class="shell grid grid-cols-1 gap-10 pb-8 pt-12 lg:grid-cols-[1.4fr_1fr]">
  <!-- Story -->
  <div use:reveal>
    <h2 class="font-display text-2xl font-semibold text-ink">Background</h2>
    <p class="prose-warm mt-3">{about.backgroundText}</p>

    <h2 class="mt-10 font-display text-2xl font-semibold text-ink">Currently</h2>
    <ul class="mt-4 space-y-3">
      {#each about.currently as item}
        <li class="flex gap-3 font-body text-ink-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
          <span>{item}</span>
        </li>
      {/each}
    </ul>

    <h2 class="mt-10 font-display text-2xl font-semibold text-ink">Beyond work</h2>
    <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {#each about.hobbies as hobby}
        <div class="rounded-2xl border border-line bg-paper-2 p-4">
          <p class="font-body text-sm font-semibold text-ink">{hobby.label}</p>
          <p class="mt-1 font-body text-sm text-ink-3">{hobby.desc}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Sidebar: skills, certs, langs -->
  <aside class="space-y-8" use:reveal>
    <div class="rounded-3xl border border-line bg-paper-2 p-6 shadow-card">
      <p class="eyebrow">Core skills</p>
      <ul class="mt-4 space-y-3">
        {#each about.skills as skill}
          <li>
            <div class="flex items-center justify-between font-body text-sm text-ink-2">
              <span>{skill.label}</span>
              <span class="text-ink-3">{skill.pct}%</span>
            </div>
            <div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-line/60">
              <div class="h-full rounded-full bg-accent" style="width: {skill.pct}%"></div>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <div class="rounded-3xl border border-line bg-paper-2 p-6 shadow-card">
      <p class="eyebrow">Certifications</p>
      <ul class="mt-3 space-y-2">
        {#each about.certs as cert}
          <li class="font-body text-sm text-ink-2">
            <span class="font-semibold text-ink">{cert.name}</span>
            <span class="block text-xs text-ink-3">{cert.issuer} · {cert.date}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="rounded-3xl border border-line bg-paper-2 p-6 shadow-card">
      <p class="eyebrow">Languages</p>
      <ul class="mt-3 space-y-1.5">
        {#each about.langs as l}
          <li class="flex justify-between font-body text-sm">
            <span class="text-ink">{l.lang}</span>
            <span class="text-ink-3">{l.level}</span>
          </li>
        {/each}
      </ul>
    </div>
  </aside>
</div>
