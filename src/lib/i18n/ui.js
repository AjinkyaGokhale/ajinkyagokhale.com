// New UI strings for the redesigned multi-page site (merged on top of translations.js).
export const ui = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      inspiration: 'Inspiration',
      workbench: 'Workbench'
    },
    home: {
      greeting: "Hey, I'm Ajinkya",
      role: 'Software engineer — IoT, cloud & systems.',
      summary:
        "Founding engineer at Nineti GmbH, building IoT infrastructure at scale on AWS. I work end to end — PCB design, embedded firmware, distributed systems, and cloud architecture from HLD to deployment. Based in Stuttgart, writing my Master's thesis, and available full-time from October 2026.",
      collageCaption:
        'University, sponsored kits, graduation, the Alps, biergarten cheers & my first PC build.',
      snapshotEyebrow: 'A quick snapshot',
      snapshotTitle: 'What I do',
      cards: {
        about: {
          title: 'Learn more about me',
          desc: 'Background, skills, certifications and the longer story.',
          cta: 'About me'
        },
        projects: {
          title: 'Projects',
          desc: "What I've shipped — IoT platforms, serverless apps, computer vision.",
          cta: 'See projects'
        },
        workbench: {
          title: 'Workbench',
          desc: 'The tools, gear and tech stack I build with every day.',
          cta: 'Open workbench'
        },
        call: {
          title: 'Book a call',
          desc: "Hiring, collaborating or just curious? Let's talk.",
          cta: 'hi@ajinkyagokhale.com'
        }
      },
      blogEyebrow: 'From the desk',
      blogTitle: 'Writing & notes',
      blogDesc: 'Occasional notes on engineering, IoT and building things that last.',
      blogAll: 'Read the blog',
      empty: 'Posts are brewing. Check back soon.'
    },
    inspiration: {
      title: 'Inspiration',
      intro: 'People, sites and reading that shape how I think and build.',
      peopleTitle: 'People & sites I admire',
      readingTitle: 'Reading & bookmarks'
    },
    workbench: {
      title: 'Workbench',
      intro: "What's on my bench — the tools, languages and gear I reach for."
    },
    blog: {
      title: 'Blog',
      intro: 'Notes on engineering, IoT and building things.',
      readMore: 'Read',
      searchPlaceholder: 'Search posts…',
      allCategories: 'All',
      sortLabel: 'Sort',
      sort: { newest: 'Newest', oldest: 'Oldest', reading: 'Reading time' },
      results: (n) => `${n} ${n === 1 ? 'post' : 'posts'}`,
      noResults: 'No posts match your search.'
    },
    common: {
      backHome: 'Back home',
      allProjects: 'All projects'
    },
    footerMeta: {
      tagline:
        'Software engineer building IoT infrastructure at scale — from hardware to cloud. Based in Stuttgart.',
      explore: 'Explore',
      elsewhere: 'Elsewhere',
      backToTop: 'Back to top'
    }
  },
  de: {
    nav: {
      home: 'Start',
      about: 'Über mich',
      projects: 'Projekte',
      blog: 'Blog',
      inspiration: 'Inspiration',
      workbench: 'Werkbank'
    },
    home: {
      greeting: 'Hey, ich bin Ajinkya',
      role: 'Softwareentwickler — IoT, Cloud & Systeme.',
      summary:
        'Gründungsingenieur bei Nineti GmbH, Aufbau von IoT-Infrastruktur im großen Maßstab auf AWS. Ich arbeite über den gesamten Stack — PCB-Design, eingebettete Firmware, verteilte Systeme und Cloud-Architektur von HLD bis Deployment. Wohnhaft in Stuttgart, schreibe meine Masterarbeit und ab Oktober 2026 in Vollzeit verfügbar.',
      collageCaption:
        'Uni, gesponserte Kits, Abschluss, die Alpen, Biergarten-Prost & mein erster PC-Build.',
      snapshotEyebrow: 'Ein kurzer Überblick',
      snapshotTitle: 'Was ich mache',
      cards: {
        about: {
          title: 'Mehr über mich',
          desc: 'Hintergrund, Fähigkeiten, Zertifikate und die längere Geschichte.',
          cta: 'Über mich'
        },
        projects: {
          title: 'Projekte',
          desc: 'Was ich gebaut habe — IoT-Plattformen, serverlose Apps, Computer Vision.',
          cta: 'Projekte ansehen'
        },
        workbench: {
          title: 'Werkbank',
          desc: 'Die Tools, Geräte und der Tech-Stack, mit dem ich täglich baue.',
          cta: 'Werkbank öffnen'
        },
        call: {
          title: 'Termin buchen',
          desc: 'Einstellung, Zusammenarbeit oder einfach neugierig? Lass uns reden.',
          cta: 'hi@ajinkyagokhale.com'
        }
      },
      blogEyebrow: 'Vom Schreibtisch',
      blogTitle: 'Texte & Notizen',
      blogDesc: 'Gelegentliche Notizen über Engineering, IoT und das Bauen von langlebigen Dingen.',
      blogAll: 'Zum Blog',
      empty: 'Beiträge sind in Arbeit. Schau bald wieder vorbei.'
    },
    inspiration: {
      title: 'Inspiration',
      intro: 'Menschen, Seiten und Lektüre, die mein Denken und Bauen prägen.',
      peopleTitle: 'Menschen & Seiten, die ich bewundere',
      readingTitle: 'Lektüre & Lesezeichen'
    },
    workbench: {
      title: 'Werkbank',
      intro: 'Was auf meiner Werkbank liegt — die Tools, Sprachen und Geräte, zu denen ich greife.'
    },
    blog: {
      title: 'Blog',
      intro: 'Notizen über Engineering, IoT und das Bauen von Dingen.',
      readMore: 'Lesen',
      searchPlaceholder: 'Beiträge durchsuchen…',
      allCategories: 'Alle',
      sortLabel: 'Sortieren',
      sort: { newest: 'Neueste', oldest: 'Älteste', reading: 'Lesezeit' },
      results: (n) => `${n} ${n === 1 ? 'Beitrag' : 'Beiträge'}`,
      noResults: 'Keine Beiträge passen zu deiner Suche.'
    },
    common: {
      backHome: 'Zur Startseite',
      allProjects: 'Alle Projekte'
    },
    footerMeta: {
      tagline:
        'Softwareentwickler, der IoT-Infrastruktur im großen Maßstab baut — von Hardware bis Cloud. Wohnhaft in Stuttgart.',
      explore: 'Entdecken',
      elsewhere: 'Woanders',
      backToTop: 'Nach oben'
    }
  }
};
