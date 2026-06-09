import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],
  kit: {
    // Static build → dist/ so the existing S3 + CloudFront workflow keeps working.
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    prerender: { handleHttpError: 'warn' }
  }
};

export default config;
