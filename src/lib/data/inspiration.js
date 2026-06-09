// Inspiration — people & sites I admire, plus reading & bookmarks.
// `avatar` uses unavatar.io (resolves a real portrait from the given provider);
// `?fallback=false` makes it 404 when missing so the UI falls back to a monogram.
export const people = [
  {
    name: 'Julia Evans',
    handle: 'jvns.ca',
    avatar: 'https://unavatar.io/github/jvns?fallback=false',
    note: 'Zines and posts that make hard systems topics feel approachable.'
  },
  {
    name: 'Andrej Karpathy',
    handle: 'karpathy.ai',
    avatar: 'https://unavatar.io/github/karpathy?fallback=false',
    note: 'Clear, first-principles thinking on neural nets and building from scratch.'
  },
  {
    name: 'Naval Ravikant',
    handle: 'nav.al',
    avatar: 'https://unavatar.io/twitter/naval?fallback=false',
    note: 'Leverage, wealth and clear thinking — long-term games with long-term people.'
  },
  {
    name: 'Jeff Geerling',
    handle: 'jeffgeerling.com',
    avatar: 'https://unavatar.io/github/geerlingguy?fallback=false',
    note: 'Homelab, Raspberry Pi and self-hosting done right.'
  },
  {
    name: 'Brian Lovin',
    handle: 'brianlovin.com',
    avatar: 'https://unavatar.io/github/brianlovin?fallback=false',
    note: 'A reference for what a personal site can be.'
  },
  {
    name: 'Fabian Hiller',
    handle: 'fabianhiller.com',
    avatar: 'https://unavatar.io/github/fabian-hiller?fallback=false',
    note: 'Thoughtful open-source and tasteful frontend craft.'
  },
  {
    name: 'Ben Eater',
    handle: 'eater.net',
    avatar: 'https://unavatar.io/github/beneater?fallback=false',
    note: 'Building computers on breadboards — patience as a teaching tool.'
  }
];

// `cover` uses the Open Library Covers API (by ISBN or cover id); `?default=false`
// returns 404 when no cover exists so the UI falls back to a styled placeholder.
export const reading = [
  {
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    kind: 'Book',
    cover: 'https://covers.openlibrary.org/b/isbn/9780135957059-M.jpg?default=false',
    link: 'https://openlibrary.org/isbn/9780135957059'
  },
  {
    title: 'Making Embedded Systems',
    author: 'Elecia White',
    kind: 'Book',
    cover: 'https://covers.openlibrary.org/b/isbn/9781449302146-M.jpg?default=false',
    link: 'https://openlibrary.org/isbn/9781449302146'
  },
  {
    title: 'Psycho-Cybernetics',
    author: 'Maxwell Maltz',
    kind: 'Book',
    cover: 'https://covers.openlibrary.org/b/id/14428293-M.jpg?default=false',
    link: 'https://openlibrary.org/isbn/9788495292087'
  },
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    kind: 'Book',
    cover: 'https://covers.openlibrary.org/b/id/10449931-M.jpg?default=false',
    link: 'https://openlibrary.org/isbn/1544514212'
  },
  {
    title: 'Doglapan',
    author: 'Ashneer Grover',
    kind: 'Book',
    cover: 'https://covers.openlibrary.org/b/id/13154741-M.jpg?default=false',
    link: 'https://openlibrary.org/isbn/0143460692'
  },
  {
    title: 'High Performance Browser Networking',
    author: 'Ilya Grigorik',
    kind: 'Book',
    cover: 'https://covers.openlibrary.org/b/isbn/9781449344764-M.jpg?default=false',
    link: 'https://openlibrary.org/isbn/9781449344764'
  }
];
