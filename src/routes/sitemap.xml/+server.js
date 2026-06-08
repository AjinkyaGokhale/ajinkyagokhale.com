import { getPosts } from '$lib/posts';

export const prerender = true;

const SITE = 'https://ajinkyagokhale.com';

// Static routes with their relative priority and how often they change.
const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/workbench', priority: '0.6', changefreq: 'monthly' },
  { path: '/inspiration', priority: '0.5', changefreq: 'monthly' }
];

const today = new Date().toISOString().split('T')[0];

export function GET() {
  const posts = getPosts();

  const urls = [
    ...pages.map(
      (page) => `  <url>
    <loc>${SITE}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ),
    ...posts.map(
      (post) => `  <url>
    <loc>${SITE}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
  ].join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
