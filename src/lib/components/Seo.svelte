<script>
  let {
    title = 'Ajinkya Gokhale — Software Engineer | IoT, Cloud & Systems',
    description = 'Ajinkya Gokhale is a software engineer specialising in IoT infrastructure, AWS cloud architecture, embedded systems and full-stack development. Founding engineer at Nineti GmbH, based in Stuttgart.',
    path = '/',
    image = '/img/avatar.png',
    type = 'website'
  } = $props();

  const base = 'https://ajinkyagokhale.com';
  const url = $derived(base + path);
  const imageUrl = $derived(image.startsWith('http') ? image : base + image);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <meta property="og:type" content={type} />
  <meta property="og:site_name" content="Ajinkya Gokhale" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={imageUrl} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
</svelte:head>
