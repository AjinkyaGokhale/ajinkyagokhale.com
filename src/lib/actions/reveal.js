// Scroll-reveal: adds `.is-visible` when the element enters the viewport once.
export function reveal(node, options = {}) {
  const { delay = 0 } = options;
  if (delay) node.style.transitionDelay = `${delay}ms`;

  if (typeof IntersectionObserver === 'undefined') {
    node.classList.add('is-visible');
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  observer.observe(node);
  return {
    destroy() {
      observer.disconnect();
    }
  };
}
