import { getPosts } from '$lib/posts';

export const prerender = true;

const SITE = 'https://ajinkyagokhale.com';
const TITLE = 'Ajinkya Gokhale — Software Engineer';
const DESCRIPTION =
  'Notes on engineering, IoT, AWS cloud and building things, by Ajinkya Gokhale — software engineer based in Stuttgart, Germany.';

const escape = (str = '') =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function GET() {
  const posts = getPosts();
  const lastBuildDate = (posts[0] ? new Date(posts[0].date) : new Date()).toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE}/blog/${post.slug}`;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(post.excerpt)}</description>
      <dc:creator>Ajinkya Gokhale</dc:creator>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(TITLE)}</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escape(DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <image>
      <url>${SITE}/img/avatar.png</url>
      <title>${escape(TITLE)}</title>
      <link>${SITE}</link>
    </image>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
