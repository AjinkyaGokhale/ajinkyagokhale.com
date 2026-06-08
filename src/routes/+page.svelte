<script>
  import Seo from '$lib/components/Seo.svelte';
  import Hero from '$lib/home/Hero.svelte';
  import Collage from '$lib/home/Collage.svelte';
  import Bento from '$lib/home/Bento.svelte';
  import BlogTeaser from '$lib/home/BlogTeaser.svelte';

  let { data } = $props();
</script>

<Seo path="/" />

<Hero />
<Collage />
<Bento />
<BlogTeaser posts={data.posts} />
