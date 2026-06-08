// Loads blog post metadata from markdown files in src/posts/.
export function getPosts() {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true });

  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/').pop().replace('.md', '');
      return { slug, ...mod.metadata };
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
