<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<div class="relative z-10 flex min-h-screen flex-col overflow-x-clip">
  <Nav />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>
