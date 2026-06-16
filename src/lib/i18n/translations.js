export const translations = {
  en: {
    nav: {
      about: 'About',
      professional: 'Professional',
      projects: 'Projects',
      resume: 'Resume'
    },
    hero: {
      bioMain: `Founding engineer at Nineti GmbH, building IoT infrastructure at scale — managing production devices on AWS. I work across the full stack: PCB design, embedded firmware, distributed systems, and system design from HLD to deployment. Language-agnostic — C, Python, TypeScript, whatever the problem needs. Based in Stuttgart, tinkering with homelabs and local LLMs in my spare time. Currently writing my Master's thesis — `,
      bioHighlight: `available full-time from Oct 2026.`,
      tags: ['IoT & Cloud', 'Embedded Systems', 'Full-Stack', 'AWS Certified'],
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      resume: 'Resume',
      toastMsg: '✓ Email copied to clipboard!'
    },
    about: {
      pageTitle: 'ABOUT.EXE',
      name: 'Ajinkya Prashant Gokhale',
      locationLabel: '## Location',
      location: 'Stuttgart, Germany',
      roleLabel: '## Role',
      roleText: `MSc. Infotech student at University of Stuttgart (Computer Hardware/Software Engineering) and Working Student at Nineti GmbH — founding engineer building IoT infrastructure from the ground up: hardware, firmware, cloud, and frontend.`,
      backgroundLabel: '## Background',
      backgroundText: `B.Tech in Electronics & Telecommunications from VJTI Mumbai (GPA 8.32/10). Started with PCB design and embedded firmware on ESP32/Arduino, then expanded into cloud architecture and full-stack development.`,
      currentlyLabel: '## Currently',
      currently: [
        `Writing Master's thesis @ University of Stuttgart`,
        `Scaling Stromleser IoT to 10,000+ devices on AWS`,
        `Growing SwapMails — serverless email, 1000+ users`,
        `Available for full-time roles from October 2026`
      ],
      skillMatrixInit: '[SKILL_MATRIX] Proficiency levels initialized...',
      certified: '✓ certified',
      skills: [
        { label: 'AWS Cloud (Lambda, EC2, DynamoDB, IoT…)', pct: 92 },
        { label: 'Python / C/C++ / Embedded Firmware', pct: 85 },
        { label: 'IoT & Hardware Design (KiCad, ESP32)', pct: 82 },
        { label: 'React.js / TypeScript / Node.js', pct: 80 },
        { label: 'Infrastructure as Code (CDK v2, Terraform)', pct: 78 },
        { label: 'Docker / CI-CD / Linux Admin', pct: 75 }
      ],
      hobbies: [
        {
          label: 'Local LLMs',
          desc: 'Optimizing inference, quantized models, open-source AI on personal hardware'
        },
        {
          label: 'Self-Hosting',
          desc: 'Home Assistant & Nextcloud on a personal Kubernetes cluster'
        },
        {
          label: 'Homelab',
          desc: 'Container orchestration, networking, infrastructure automation'
        },
        { label: 'Tech Content', desc: 'Built GPHReviews to 42K+ YouTube subscribers (2017–2023)' }
      ],
      certs: [
        {
          name: 'AWS Certified AI Practitioner',
          issuer: 'Amazon Web Services',
          category: 'aws',
          date: 'Nov 2025'
        },
        {
          name: 'AWS Certified Solutions Architect',
          issuer: 'Amazon Web Services',
          category: 'aws',
          date: 'Nov 2025'
        }
      ],
      learningCerts: [
        { name: 'Agile Foundations', issuer: 'LinkedIn' },
        { name: 'Agile Software Development', issuer: 'LinkedIn' },
        { name: 'Programming Foundations: APIs and Web Services', issuer: 'LinkedIn' },
        { name: 'Programming Foundations: Algorithms', issuer: 'LinkedIn' },
        { name: 'Web Development Foundations: Web Technologies', issuer: 'LinkedIn' },
        { name: 'Introduction to Web Design and Development', issuer: 'LinkedIn' },
        { name: 'HTTP Essential Training', issuer: 'LinkedIn' },
        { name: 'Building an Android App with Architecture Components', issuer: 'LinkedIn' },
        { name: 'Introduction to Data Structures & Algorithms in Java', issuer: 'LinkedIn' },
        { name: 'Java: Database Integration with JDBC', issuer: 'LinkedIn' },
        { name: 'Java 8+ Essential Training: Objects and APIs', issuer: 'LinkedIn' },
        { name: 'Java 8+ Essential Training: Syntax and Structure', issuer: 'LinkedIn' },
        { name: 'Learning Java', issuer: 'LinkedIn' },
        { name: 'Learning Java Applications', issuer: 'LinkedIn' },
        { name: 'Learning Linux Command Line', issuer: 'LinkedIn' },
        { name: 'Linux Foundation Cert Prep: Essential Commands', issuer: 'LinkedIn' },
        { name: 'Business Etiquette: Phone, Email, and Text', issuer: 'LinkedIn' },
        { name: 'Proven Tips for Managing Your Time', issuer: 'LinkedIn' },
        { name: 'Teamwork Foundations', issuer: 'LinkedIn' },
        { name: 'Learn C++ Programming — Beginner to Advance', issuer: 'Udemy' }
      ],
      learningTitle: 'Learning & Development',
      langs: [
        { lang: 'English', level: 'Professional Proficiency' },
        { lang: 'German', level: 'Intermediate (B1)' },
        { lang: 'Hindi', level: 'Native Speaker' }
      ]
    },
    projects: {
      pageTitle: 'PROJECTS.DIR',
      totalItems: (n) => `total ${n} items found`,
      skillsTitle: 'TECHNICAL_SKILLS',
      skillCategories: [
        {
          label: 'Cloud',
          items:
            'AWS (Lambda · EC2 · S3 · DynamoDB · RDS · IoT Core · SES · API Gateway · CloudFormation · IAM · VPC · CloudWatch) · GCP · Firebase'
        },
        {
          label: 'Languages',
          items: 'Python · Java · JavaScript · Go (Golang) · C/C++ · TypeScript · HTML5/CSS3'
        },
        {
          label: 'Backend',
          items:
            'Node.js · Express.js · RESTful APIs · GraphQL · Prisma · Mongoose · Microservices · Serverless · Event-Driven Architecture'
        },
        {
          label: 'Frontend',
          items: 'React.js · Next.js · JavaScript ES6+ · Chrome Extension Dev · Responsive Design'
        },
        {
          label: 'IaC & CI/CD',
          items:
            'AWS CDK v2 · CloudFormation · Terraform · GitHub Actions · CodePipeline · Jenkins · Git'
        },
        {
          label: 'Databases',
          items: 'DynamoDB · PostgreSQL · MongoDB · MySQL · SQL · NoSQL · Data Modelling'
        },
        {
          label: 'DevOps',
          items:
            'Docker · Kubernetes · Prometheus · Postman · CloudWatch · X-Ray · Linux Administration · Performance Monitoring'
        },
        {
          label: 'IoT/HW',
          items: 'AWS IoT Core · MQTT · Raspberry Pi · Arduino · ESP32/NodeMCU · KiCad · Fusion 360'
        },
        {
          label: 'Security',
          items: 'GDPR · AWS IAM · SSL/TLS · AES-256 · Network Security · Data Privacy'
        }
      ],
      visitCta: 'Visit site',
      codeCta: 'Code',
      // `image` is an optional path under /static (e.g. '/img/projects/swapmails.png').
      // When absent, the featured card falls back to a type-driven panel.
      projects: [
        {
          name: 'APIMyResume',
          subtitle: 'Tailored resume API',
          period: 'Jun 2025 – Present',
          status: 'Live',
          category: 'Products',
          desc: 'Self-hosted REST API that keeps one master resume and turns it into unlimited tailored PDFs — render an existing base, generate a fresh targeted version, or let an AI agent rewrite bullets and inject keywords per job.',
          bullets: [
            'Bun + Hono + SQLite, ~400 lines of TypeScript — single Docker image',
            'Native Typst render pipeline, pixel-perfect PDFs in milliseconds',
            'AI-agent friendly: GET /content + PATCH /bases rewire bullets and skills for the job',
            'Built-in dashboard for browsing resumes, previewing PDFs, and managing API keys'
          ],
          tags: ['Bun', 'Hono', 'TypeScript', 'Typst', 'SQLite', 'Docker', 'REST API'],
          link: 'https://apimyresume.com',
          repo: 'https://github.com/AjinkyaGokhale/apimyresume',
          image: '/img/projects/apimyresume.png'
        },
        {
          name: 'SwapMails',
          subtitle: 'Serverless email platform',
          period: 'Jan 2025 – Present',
          status: 'Live',
          category: 'Products',
          desc: 'Event-driven serverless disposable email platform — GDPR-compliant, AES-256 encryption, and 95% cheaper to run than traditional hosting.',
          bullets: [
            'Serverless AWS backend — Lambda, SES, DynamoDB, CDK v2',
            'Chrome extension on the Web Store with 500+ active users',
            'GDPR-compliant with AES-256 encryption'
          ],
          tags: ['AWS Lambda', 'DynamoDB', 'SES', 'CDK v2', 'React.js', 'Chrome Ext', 'GDPR'],
          link: 'https://www.swapmails.com/',
          image: '/img/projects/swapmails.png'
        },
        {
          name: 'ESP Flasher',
          subtitle: 'Desktop firmware flasher',
          status: 'Open source',
          category: 'Products',
          desc: 'A JavaFX desktop app for flashing firmware to Espressif chips without the command line.',
          bullets: [
            'JavaFX GUI wrapping the official esptool',
            'One-click ESP32/ESP8266 flashing with auto port detection',
            'Factory mode for batch flashing; macOS & Windows installers'
          ],
          tags: ['Java', 'JavaFX', 'ESP32', 'esptool', 'Maven'],
          repo: 'https://github.com/AjinkyaGokhale/esp-flasher-java',
          image: '/img/projects/esp-flasher.png',
          imageFit: 'contain'
        },
        {
          name: 'Gesture Recognition',
          subtitle: 'Computer vision',
          period: 'Jan 2023',
          status: 'Research',
          category: "Bachelor's project",
          desc: 'Real-time hand gesture recognition with a Time-of-Flight depth camera, using advanced ML filtering to cut false positives.',
          bullets: [
            'Real-time hand gesture detection at 95% accuracy',
            'Depth sensing via a Time-of-Flight camera',
            'OpenCV pipeline for contour and fingertip tracking'
          ],
          tags: ['Python', 'OpenCV', 'Computer Vision', 'ToF Camera', 'Machine Learning'],
          repo: 'https://github.com/AjinkyaGokhale/Gesture-Recognition',
          image: '/img/projects/gesture-recog.png'
        },
        {
          name: 'Smart Parking System',
          subtitle: 'IoT & embedded',
          period: 'Jun 2022',
          status: 'School project',
          category: 'School projects',
          image: '/img/projects/smart-parking.avif',
          desc: 'Detects free parking slots and shows live availability before drivers enter the lot.',
          bullets: [
            'Real-time slot detection with IR proximity sensors',
            'Live availability streamed over MQTT to a mobile dashboard',
            'Raspberry Pi 3 + Python with a 16x2 LCD status display'
          ],
          tags: ['Raspberry Pi', 'Python', 'MQTT', 'IoT', 'IR Sensors'],
          link: 'https://www.hackster.io/ajinkyagokhale/iot-based-smart-parking-system-using-raspberry-pi-c7b2dc'
        },
        {
          name: 'Wearable Tech for the Blind',
          subtitle: 'Assistive wearable',
          period: 'Oct 2020',
          status: 'School project',
          category: 'School projects',
          image: '/img/projects/wearable.avif',
          desc: 'A handheld guidance device that helps visually impaired users detect obstacles and share their location.',
          bullets: [
            'Ultrasonic obstacle detection with variable-frequency audio alerts',
            'Emergency GPS location sharing via SMS over GSM',
            'Arduino UNO + Pro Mini, HC-SR04, Neo-6 GPS, vibration feedback'
          ],
          tags: ['Arduino', 'C/C++', 'Ultrasonic', 'GPS', 'GSM', 'Wearable'],
          link: 'https://www.hackster.io/gph/wearable-technology-for-blinds-80725a'
        }
      ]
    },
    professional: {
      expTitle: 'EXPERIENCE.LOG',
      eduTitle: 'EDUCATION.LOG',
      timeline: [
        {
          period: 'Feb 2024 – Present',
          company: 'Nineti GmbH (Startup)',
          role: 'Working Student · Former Intern',
          location: 'Stuttgart, Germany',
          bullets: [
            'Founding Engineer: Spearheaded development of Stromleser IoT devices, mobile app, and AWS backend infrastructure.',
            'AWS Cloud: Scalable infrastructure managing 10,000+ IoT devices via EC2, Lambda, DynamoDB, IoT Core — 99.9% uptime.',
            'Hardware Design: Designed and tested 20+ electronic circuits using KiCad (PCB design, component selection).',
            'Firmware Optimization: 25% reduction in response time and improved power efficiency for battery-operated devices.'
          ],
          tags: ['AWS', 'IoT Core', 'DynamoDB', 'Lambda', 'KiCad', 'Firmware', 'ESP32']
        },
        {
          period: 'May 2020 – Aug 2020',
          company: 'Nomadists India Pvt. Ltd.',
          role: 'Full Stack Developer Intern',
          location: 'Pune, India',
          bullets: [
            'Developed responsive web apps with HTML5, CSS3, JavaScript — cross-browser & mobile-first.',
            'Implemented database solutions with SQL and ORM frameworks, optimizing query performance.',
            'Collaborated via Git and agile methodologies, maintaining quality through peer reviews and CI.'
          ],
          tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Git', 'Agile']
        },
        {
          period: 'Spring 2017 – Oct 2023',
          company: 'GPHReviews',
          role: 'Tech Content Creator & Community Builder',
          location: 'YouTube Platform',
          bullets: [
            'Built a community of 42,000+ subscribers through consistent tech review content.',
            'Established partnerships with iOS app developers and tech companies for product launches.',
            'Created an active Apple technology enthusiast community fostering emerging tech discussions.'
          ],
          tags: ['Content Creation', 'Digital Marketing', 'Community Building', 'iOS']
        }
      ],
      education: [
        {
          period: 'Oct 2023 – Present',
          institution: 'University of Stuttgart',
          degree: 'MSc. Infotech',
          detail: 'Major: Computer Hardware/Software Engineering',
          location: 'Stuttgart, Germany'
        },
        {
          period: 'July 2020 – May 2023',
          institution: 'Veermata Jijabai Technological Institute',
          degree: 'B.Tech Electronics & Telecommunications',
          detail: 'GPA: 8.32 / 10',
          location: 'Mumbai, India'
        },
        {
          period: 'July 2017 – May 2020',
          institution: 'Government Polytechnic Amravati',
          degree: 'Diploma in Electronics & Telecommunications',
          detail: '96.68%',
          location: 'Amravati, India'
        }
      ]
    },
    resume: {
      pageTitle: 'RESUME.PDF',
      downloadBtn: 'Download PDF',
      openBtn: 'Open PDF',
      saveBtn: 'Save',
      openShort: 'Open',
      subtitle: 'MSc. Infotech · IoT & Cloud Engineer · AWS Certified',
      sections: {
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        certifications: 'Certifications',
        technicalSkills: 'Technical Skills',
        languagesExtracurricular: 'Languages & Extracurricular'
      },
      education: [
        {
          period: 'Oct 2023 – Present',
          title: 'University of Stuttgart',
          subtitle: 'MSc. Infotech — Computer Hardware/Software Engineering',
          location: 'Stuttgart, Germany'
        },
        {
          period: 'July 2020 – May 2023',
          title: 'Veermata Jijabai Technological Institute',
          subtitle: 'B.Tech Electronics & Telecommunications · GPA 8.32/10',
          location: 'Mumbai, India'
        },
        {
          period: 'July 2017 – May 2020',
          title: 'Government Polytechnic Amravati',
          subtitle: 'Diploma in Electronics & Telecommunications · 96.68%',
          location: 'Amravati, India'
        }
      ],
      experience: [
        {
          period: 'Feb 2024 – Present',
          title: 'Nineti GmbH (Startup)',
          subtitle: 'Working Student · Former Intern',
          location: 'Stuttgart, Germany',
          bullets: [
            'Founding Engineer: Spearheaded Stromleser IoT devices, mobile app, and AWS backend infrastructure.',
            'AWS Cloud: Managing 10,000+ IoT devices via EC2, Lambda, DynamoDB, IoT Core — 99.9% uptime.',
            'Hardware Design: Designed and tested 20+ electronic circuits using KiCad.',
            'Firmware Optimization: 25% reduction in response time for battery-operated devices.'
          ],
          tags: ['AWS', 'IoT Core', 'DynamoDB', 'Lambda', 'KiCad', 'ESP32']
        },
        {
          period: 'May 2020 – Aug 2020',
          title: 'Nomadists India Pvt. Ltd.',
          subtitle: 'Full Stack Developer Intern',
          location: 'Pune, India',
          bullets: [
            'Built responsive web apps with HTML5, CSS3, JavaScript — mobile-first.',
            'Implemented SQL/ORM database solutions optimizing query performance.',
            'Collaborated via Git and agile; maintained quality through peer reviews and CI.'
          ],
          tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Git']
        }
      ],
      projects: [
        {
          period: 'Jun 2025 – Present',
          title: 'APIMyResume — Tailored Resume API',
          subtitle: 'Bun · Hono · Typst · SQLite',
          bullets: [
            'Self-hosted REST API: keep one master resume, render unlimited tailored PDFs per job.',
            'Native Typst render pipeline; ~400 lines of TypeScript, single Docker image, SQLite storage.',
            'AI-agent integration via GET /content + PATCH /bases — rewrite bullets, inject keywords, regenerate.',
            'Built-in dashboard for browsing resumes, previewing PDFs, and managing API keys.'
          ],
          tags: ['Bun', 'Hono', 'TypeScript', 'Typst', 'SQLite', 'Docker', 'REST API']
        },
        {
          period: 'Jan 2025 – Present',
          title: 'SwapMails — AWS Serverless Email Platform',
          subtitle: 'Full-Stack Web App & Chrome Extension',
          bullets: [
            'Serverless arch: Lambda, SES, DynamoDB, CDK v2 — 1,000+ users, 99.9% uptime, 95% cost reduction.',
            'Chrome extension on Web Store with 500+ active users; React.js frontend via CloudFront CDN.',
            'RESTful API Gateway serving 10,000+ calls/day; GDPR-compliant with AES-256 encryption.'
          ],
          tags: ['AWS Lambda', 'DynamoDB', 'SES', 'CDK v2', 'React.js', 'GDPR']
        },
        {
          period: 'Jan 2023',
          title: 'Gesture Recognition — Time-of-Flight Camera',
          subtitle: 'Python, OpenCV, Computer Vision',
          bullets: [
            '95% accuracy in real-time gesture detection; 20% reduction in false positives via ML filtering.'
          ],
          tags: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning']
        }
      ],
      skills: [
        {
          label: 'Cloud',
          value:
            'AWS Expert (Lambda · EC2 · S3 · DynamoDB · IoT Core · SES · API Gateway · CloudFormation · IAM · CloudWatch) · GCP · Firebase'
        },
        {
          label: 'Languages',
          value: 'Python · Java · JavaScript · Go (Golang) · C/C++ · TypeScript · HTML5/CSS3'
        },
        {
          label: 'Backend',
          value:
            'Node.js · Express.js · RESTful APIs · GraphQL · Prisma · Mongoose · Microservices · Serverless · Event-Driven Architecture'
        },
        {
          label: 'Frontend',
          value:
            'React.js · Next.js · JavaScript ES6+ · Chrome Extension Development · Responsive Design'
        },
        {
          label: 'IaC/CI-CD',
          value:
            'AWS CDK v2 · CloudFormation · Terraform · GitHub Actions · CodePipeline · Jenkins · Git'
        },
        { label: 'Databases', value: 'DynamoDB · PostgreSQL · MongoDB · MySQL · SQL · NoSQL' },
        {
          label: 'IoT/HW',
          value: 'AWS IoT Core · MQTT · Raspberry Pi · Arduino · ESP32/NodeMCU · KiCad · Fusion 360'
        },
        {
          label: 'DevOps',
          value:
            'Docker · Kubernetes · Prometheus · Postman · CloudWatch · X-Ray · Linux Administration'
        }
      ],
      langsExtra: [
        ['English', 'Professional'],
        ['German', 'Intermediate (B1)'],
        ['Hindi', 'Native']
      ],
      extracurricular:
        'GPHReviews (2017–2023) — Tech content creator with 42,000+ YouTube subscribers; partnerships with iOS developers and tech companies.',
      gphReviews: 'GPHReviews'
    },
    footer: {
      made: 'Made with',
      in: 'in Stuttgart',
      rights: 'All rights reserved'
    }
  },

  de: {
    nav: {
      about: 'Über mich',
      professional: 'Erfahrung',
      projects: 'Projekte',
      resume: 'Lebenslauf'
    },
    hero: {
      bioMain: `Gründungsingenieur bei Nineti GmbH, Aufbau von IoT-Infrastruktur im großen Maßstab — Verwaltung von Produktionsgeräten auf AWS. Ich arbeite über den gesamten Stack: PCB-Design, eingebettete Firmware, verteilte Systeme und Systemdesign von HLD bis Deployment. Sprachunabhängig — C, Python, TypeScript, was auch immer das Problem erfordert. Wohnhaft in Stuttgart, bastle in meiner Freizeit mit Homelabs und lokalen LLMs. Schreibe derzeit meine Masterarbeit — `,
      bioHighlight: `ab Oktober 2026 in Vollzeit verfügbar.`,
      tags: ['IoT & Cloud', 'Eingebettete Systeme', 'Full-Stack', 'AWS Zertifiziert'],
      copyEmail: 'E-Mail kopieren',
      copied: 'Kopiert!',
      resume: 'Lebenslauf',
      toastMsg: '✓ E-Mail in die Zwischenablage kopiert!'
    },
    about: {
      pageTitle: 'ABOUT.EXE',
      name: 'Ajinkya Prashant Gokhale',
      locationLabel: '## Standort',
      location: 'Stuttgart, Deutschland',
      roleLabel: '## Rolle',
      roleText: `MSc. Infotech-Student an der Universität Stuttgart (Computer Hardware/Software Engineering) und Werkstudent bei Nineti GmbH — Gründungsingenieur beim Aufbau der IoT-Infrastruktur von Grund auf: Hardware, Firmware, Cloud und Frontend.`,
      backgroundLabel: '## Hintergrund',
      backgroundText: `B.Tech in Elektronik & Telekommunikation vom VJTI Mumbai (GPA 8,32/10). Begonnen mit PCB-Design und eingebetteter Firmware auf ESP32/Arduino, dann erweitert in Cloud-Architektur und Full-Stack-Entwicklung.`,
      currentlyLabel: '## Aktuell',
      currently: [
        `Masterarbeit @ Universität Stuttgart`,
        `Skalierung von Stromleser IoT auf 10.000+ Geräte auf AWS`,
        `Wachstum von SwapMails — serverlose E-Mail, 1000+ Nutzer`,
        `Ab Oktober 2026 für Vollzeitstellen verfügbar`
      ],
      skillMatrixInit: '[SKILL_MATRIX] Kompetenzlevel initialisiert...',
      certified: '✓ zertifiziert',
      skills: [
        { label: 'AWS Cloud (Lambda, EC2, DynamoDB, IoT…)', pct: 92 },
        { label: 'Python / C/C++ / Eingebettete Firmware', pct: 85 },
        { label: 'IoT & Hardware-Design (KiCad, ESP32)', pct: 82 },
        { label: 'React.js / TypeScript / Node.js', pct: 80 },
        { label: 'Infrastructure as Code (CDK v2, Terraform)', pct: 78 },
        { label: 'Docker / CI-CD / Linux Admin', pct: 75 }
      ],
      hobbies: [
        {
          label: 'Lokale LLMs',
          desc: 'Inferenz-Optimierung, quantisierte Modelle, Open-Source-KI auf eigener Hardware'
        },
        {
          label: 'Self-Hosting',
          desc: 'Home Assistant & Nextcloud auf einem persönlichen Kubernetes-Cluster'
        },
        {
          label: 'Homelab',
          desc: 'Container-Orchestrierung, Netzwerk, Infrastrukturautomatisierung'
        },
        {
          label: 'Tech-Content',
          desc: 'GPHReviews auf 42K+ YouTube-Abonnenten gebracht (2017–2023)'
        }
      ],
      certs: [
        {
          name: 'AWS Certified AI Practitioner',
          issuer: 'Amazon Web Services',
          category: 'aws',
          date: 'Nov 2025'
        },
        {
          name: 'AWS Certified Solutions Architect',
          issuer: 'Amazon Web Services',
          category: 'aws',
          date: 'Nov 2025'
        }
      ],
      learningCerts: [
        { name: 'Agile Foundations', issuer: 'LinkedIn' },
        { name: 'Agile Software Development', issuer: 'LinkedIn' },
        { name: 'Programming Foundations: APIs and Web Services', issuer: 'LinkedIn' },
        { name: 'Programming Foundations: Algorithms', issuer: 'LinkedIn' },
        { name: 'Web Development Foundations: Web Technologies', issuer: 'LinkedIn' },
        { name: 'Introduction to Web Design and Development', issuer: 'LinkedIn' },
        { name: 'HTTP Essential Training', issuer: 'LinkedIn' },
        { name: 'Building an Android App with Architecture Components', issuer: 'LinkedIn' },
        { name: 'Introduction to Data Structures & Algorithms in Java', issuer: 'LinkedIn' },
        { name: 'Java: Database Integration with JDBC', issuer: 'LinkedIn' },
        { name: 'Java 8+ Essential Training: Objects and APIs', issuer: 'LinkedIn' },
        { name: 'Java 8+ Essential Training: Syntax and Structure', issuer: 'LinkedIn' },
        { name: 'Learning Java', issuer: 'LinkedIn' },
        { name: 'Learning Java Applications', issuer: 'LinkedIn' },
        { name: 'Learning Linux Command Line', issuer: 'LinkedIn' },
        { name: 'Linux Foundation Cert Prep: Essential Commands', issuer: 'LinkedIn' },
        { name: 'Business Etiquette: Phone, Email, and Text', issuer: 'LinkedIn' },
        { name: 'Proven Tips for Managing Your Time', issuer: 'LinkedIn' },
        { name: 'Teamwork Foundations', issuer: 'LinkedIn' },
        { name: 'Learn C++ Programming — Beginner to Advance', issuer: 'Udemy' }
      ],
      learningTitle: 'Lernkurse & Weiterbildung',
      langs: [
        { lang: 'Englisch', level: 'Berufliche Kompetenz' },
        { lang: 'Deutsch', level: 'Mittelstufe (B1)' },
        { lang: 'Hindi', level: 'Muttersprache' }
      ]
    },
    projects: {
      pageTitle: 'PROJECTS.DIR',
      totalItems: (n) => `insgesamt ${n} Einträge gefunden`,
      skillsTitle: 'TECHNICAL_SKILLS',
      skillCategories: [
        {
          label: 'Cloud',
          items:
            'AWS (Lambda · EC2 · S3 · DynamoDB · RDS · IoT Core · SES · API Gateway · CloudFormation · IAM · VPC · CloudWatch) · GCP · Firebase'
        },
        {
          label: 'Sprachen',
          items: 'Python · Java · JavaScript · Go (Golang) · C/C++ · TypeScript · HTML5/CSS3'
        },
        {
          label: 'Backend',
          items:
            'Node.js · Express.js · RESTful APIs · GraphQL · Prisma · Mongoose · Microservices · Serverless · Event-Driven Architecture'
        },
        {
          label: 'Frontend',
          items: 'React.js · Next.js · JavaScript ES6+ · Chrome-Erweiterung · Responsive Design'
        },
        {
          label: 'IaC & CI/CD',
          items:
            'AWS CDK v2 · CloudFormation · Terraform · GitHub Actions · CodePipeline · Jenkins · Git'
        },
        {
          label: 'Datenbanken',
          items: 'DynamoDB · PostgreSQL · MongoDB · MySQL · SQL · NoSQL · Datenmodellierung'
        },
        {
          label: 'DevOps',
          items:
            'Docker · Kubernetes · Prometheus · Postman · CloudWatch · X-Ray · Linux-Administration · Performance-Monitoring'
        },
        {
          label: 'IoT/HW',
          items: 'AWS IoT Core · MQTT · Raspberry Pi · Arduino · ESP32/NodeMCU · KiCad · Fusion 360'
        },
        {
          label: 'Sicherheit',
          items: 'DSGVO · AWS IAM · SSL/TLS · AES-256 · Netzwerksicherheit · Datenschutz'
        }
      ],
      visitCta: 'Zur Website',
      codeCta: 'Code',
      // `image` ist ein optionaler Pfad unter /static (z.B. '/img/projects/swapmails.png').
      // Fehlt das Bild, zeigt die Featured-Karte ein typografisches Panel.
      projects: [
        {
          name: 'APIMyResume',
          subtitle: 'Maßgeschneiderte Lebenslauf-API',
          period: 'Jun 2025 – Heute',
          status: 'Live',
          category: 'Produkte',
          desc: 'Selbstgehostete REST-API, die einen Master-Lebenslauf verwaltet und in unbegrenzt viele maßgeschneiderte PDFs verwandelt — bestehende Basis rendern, neue zielgerichtete Version erstellen oder von einem KI-Agenten Bullets und Keywords pro Job umschreiben lassen.',
          bullets: [
            'Bun + Hono + SQLite, ~400 Zeilen TypeScript — ein einzelnes Docker-Image',
            'Native Typst-Render-Pipeline, pixelgenaue PDFs in Millisekunden',
            'KI-Agent-fähig: GET /content + PATCH /bases ändern Bullets und Skills pro Stellenausschreibung',
            'Integriertes Dashboard zum Verwalten von Lebensläufen, PDF-Vorschau und API-Keys'
          ],
          tags: ['Bun', 'Hono', 'TypeScript', 'Typst', 'SQLite', 'Docker', 'REST API'],
          link: 'https://apimyresume.com',
          repo: 'https://github.com/AjinkyaGokhale/apimyresume',
          image: '/img/projects/apimyresume.png'
        },
        {
          name: 'SwapMails',
          subtitle: 'Serverlose E-Mail-Plattform',
          period: 'Jan 2025 – Heute',
          status: 'Live',
          category: 'Produkte',
          desc: 'Event-getriebene serverlose Wegwerf-E-Mail-Plattform — DSGVO-konform, AES-256-Verschlüsselung und 95% günstiger im Betrieb als traditionelles Hosting.',
          bullets: [
            'Serverloses AWS-Backend — Lambda, SES, DynamoDB, CDK v2',
            'Chrome-Erweiterung im Web Store mit 500+ aktiven Nutzern',
            'DSGVO-konform mit AES-256-Verschlüsselung'
          ],
          tags: ['AWS Lambda', 'DynamoDB', 'SES', 'CDK v2', 'React.js', 'Chrome Ext', 'DSGVO'],
          link: 'https://www.swapmails.com/',
          image: '/img/projects/swapmails.png'
        },
        {
          name: 'ESP Flasher',
          subtitle: 'Desktop-Firmware-Flasher',
          status: 'Open Source',
          category: 'Produkte',
          desc: 'Eine JavaFX-Desktop-App zum Flashen von Firmware auf Espressif-Chips ohne Kommandozeile.',
          bullets: [
            'JavaFX-GUI als Aufsatz auf das offizielle esptool',
            'Ein-Klick-Flashen von ESP32/ESP8266 mit automatischer Port-Erkennung',
            'Factory-Modus für Batch-Flashen; macOS- & Windows-Installer'
          ],
          tags: ['Java', 'JavaFX', 'ESP32', 'esptool', 'Maven'],
          repo: 'https://github.com/AjinkyaGokhale/esp-flasher-java',
          image: '/img/projects/esp-flasher.png',
          imageFit: 'contain'
        },
        {
          name: 'Gestenerkennung',
          subtitle: 'Computer Vision',
          period: 'Jan 2023',
          status: 'Forschung',
          category: 'Bachelorprojekt',
          desc: 'Echtzeit-Handgestenerkennung mit einer Time-of-Flight Tiefenkamera, mit fortgeschrittenem ML-Filtering zur Reduzierung von Fehlerkennungen.',
          bullets: [
            'Echtzeit-Handgestenerkennung mit 95% Genauigkeit',
            'Tiefenmessung via Time-of-Flight-Kamera',
            'OpenCV-Pipeline zur Kontur- und Fingerspitzen-Erkennung'
          ],
          tags: ['Python', 'OpenCV', 'Computer Vision', 'ToF Kamera', 'Machine Learning'],
          repo: 'https://github.com/AjinkyaGokhale/Gesture-Recognition',
          image: '/img/projects/gesture-recog.png'
        },
        {
          name: 'Smart Parking System',
          subtitle: 'IoT & Embedded',
          period: 'Jun 2022',
          status: 'Schulprojekt',
          category: 'Schulprojekte',
          image: '/img/projects/smart-parking.avif',
          desc: 'Erkennt freie Parkplätze und zeigt die Verfügbarkeit live an, bevor Fahrer einfahren.',
          bullets: [
            'Echtzeit-Platzerkennung mit IR-Annäherungssensoren',
            'Live-Verfügbarkeit per MQTT an ein mobiles Dashboard',
            'Raspberry Pi 3 + Python mit 16x2-LCD-Statusanzeige'
          ],
          tags: ['Raspberry Pi', 'Python', 'MQTT', 'IoT', 'IR-Sensoren'],
          link: 'https://www.hackster.io/ajinkyagokhale/iot-based-smart-parking-system-using-raspberry-pi-c7b2dc'
        },
        {
          name: 'Wearable Tech for the Blind',
          subtitle: 'Assistives Wearable',
          period: 'Okt 2020',
          status: 'Schulprojekt',
          category: 'Schulprojekte',
          image: '/img/projects/wearable.avif',
          desc: 'Ein handgeführtes Gerät, das sehbehinderten Menschen hilft, Hindernisse zu erkennen und ihren Standort zu teilen.',
          bullets: [
            'Ultraschall-Hinderniserkennung mit frequenzvariablen Audiosignalen',
            'Notfall-Standortübermittlung per SMS über GSM',
            'Arduino UNO + Pro Mini, HC-SR04, Neo-6 GPS, Vibrationsfeedback'
          ],
          tags: ['Arduino', 'C/C++', 'Ultraschall', 'GPS', 'GSM', 'Wearable'],
          link: 'https://www.hackster.io/gph/wearable-technology-for-blinds-80725a'
        }
      ]
    },
    professional: {
      expTitle: 'EXPERIENCE.LOG',
      eduTitle: 'EDUCATION.LOG',
      timeline: [
        {
          period: 'Feb 2024 – Heute',
          company: 'Nineti GmbH (Startup)',
          role: 'Werkstudent · Ehemaliger Praktikant',
          location: 'Stuttgart, Deutschland',
          bullets: [
            'Gründungsingenieur: Entwicklung der Stromleser-IoT-Geräte, mobilen App und AWS-Backend-Infrastruktur.',
            'AWS Cloud: Skalierbare Infrastruktur für 10.000+ IoT-Geräte via EC2, Lambda, DynamoDB, IoT Core — 99,9% Verfügbarkeit.',
            'Hardware-Design: Entwurf und Test von 20+ elektronischen Schaltkreisen mit KiCad (PCB-Design, Bauteilauswahl).',
            'Firmware-Optimierung: 25% Reduzierung der Antwortzeit und verbesserte Energieeffizienz für batteriebetriebene Geräte.'
          ],
          tags: ['AWS', 'IoT Core', 'DynamoDB', 'Lambda', 'KiCad', 'Firmware', 'ESP32']
        },
        {
          period: 'Mai 2020 – Aug 2020',
          company: 'Nomadists India Pvt. Ltd.',
          role: 'Full Stack Developer Praktikant',
          location: 'Pune, Indien',
          bullets: [
            'Entwicklung responsiver Webanwendungen mit HTML5, CSS3, JavaScript — browserübergreifend & Mobile-first.',
            'Implementierung von Datenbanklösungen mit SQL und ORM-Frameworks, Optimierung der Query-Performance.',
            'Zusammenarbeit via Git und agile Methoden, Qualitätssicherung durch Peer-Reviews und CI.'
          ],
          tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Git', 'Agile']
        },
        {
          period: 'Frühjahr 2017 – Okt 2023',
          company: 'GPHReviews',
          role: 'Tech-Content-Creator & Community Builder',
          location: 'YouTube-Plattform',
          bullets: [
            'Aufbau einer Community von 42.000+ Abonnenten durch konsistenten Tech-Review-Content.',
            'Partnerschaften mit iOS-App-Entwicklern und Technologieunternehmen für Produktlaunches.',
            'Aktive Apple-Technologie-Enthusiasten-Community zur Förderung von Diskussionen über neue Technologien.'
          ],
          tags: ['Content Creation', 'Digital Marketing', 'Community Building', 'iOS']
        }
      ],
      education: [
        {
          period: 'Okt 2023 – Heute',
          institution: 'Universität Stuttgart',
          degree: 'MSc. Infotech',
          detail: 'Schwerpunkt: Computer Hardware/Software Engineering',
          location: 'Stuttgart, Deutschland'
        },
        {
          period: 'Juli 2020 – Mai 2023',
          institution: 'Veermata Jijabai Technological Institute',
          degree: 'B.Tech Elektronik & Telekommunikation',
          detail: 'GPA: 8,32 / 10',
          location: 'Mumbai, Indien'
        },
        {
          period: 'Juli 2017 – Mai 2020',
          institution: 'Government Polytechnic Amravati',
          degree: 'Diplom in Elektronik & Telekommunikation',
          detail: '96,68%',
          location: 'Amravati, Indien'
        }
      ]
    },
    resume: {
      pageTitle: 'RESUME.PDF',
      downloadBtn: 'PDF herunterladen',
      openBtn: 'PDF öffnen',
      saveBtn: 'Speichern',
      openShort: 'Öffnen',
      subtitle: 'MSc. Infotech · IoT & Cloud Engineer · AWS Zertifiziert',
      sections: {
        education: 'Ausbildung',
        experience: 'Erfahrung',
        projects: 'Projekte',
        certifications: 'Zertifikate',
        technicalSkills: 'Technische Fähigkeiten',
        languagesExtracurricular: 'Sprachen & Außerschulisches'
      },
      education: [
        {
          period: 'Okt 2023 – Heute',
          title: 'Universität Stuttgart',
          subtitle: 'MSc. Infotech — Computer Hardware/Software Engineering',
          location: 'Stuttgart, Deutschland'
        },
        {
          period: 'Juli 2020 – Mai 2023',
          title: 'Veermata Jijabai Technological Institute',
          subtitle: 'B.Tech Elektronik & Telekommunikation · GPA 8,32/10',
          location: 'Mumbai, Indien'
        },
        {
          period: 'Juli 2017 – Mai 2020',
          title: 'Government Polytechnic Amravati',
          subtitle: 'Diplom in Elektronik & Telekommunikation · 96,68%',
          location: 'Amravati, Indien'
        }
      ],
      experience: [
        {
          period: 'Feb 2024 – Heute',
          title: 'Nineti GmbH (Startup)',
          subtitle: 'Werkstudent · Ehemaliger Praktikant',
          location: 'Stuttgart, Deutschland',
          bullets: [
            'Gründungsingenieur: Stromleser-IoT-Geräte, mobile App und AWS-Backend-Infrastruktur.',
            'AWS Cloud: 10.000+ IoT-Geräte via EC2, Lambda, DynamoDB, IoT Core — 99,9% Verfügbarkeit.',
            'Hardware-Design: 20+ elektronische Schaltkreise mit KiCad entworfen und getestet.',
            'Firmware-Optimierung: 25% Reduzierung der Antwortzeit für batteriebetriebene Geräte.'
          ],
          tags: ['AWS', 'IoT Core', 'DynamoDB', 'Lambda', 'KiCad', 'ESP32']
        },
        {
          period: 'Mai 2020 – Aug 2020',
          title: 'Nomadists India Pvt. Ltd.',
          subtitle: 'Full Stack Developer Praktikant',
          location: 'Pune, Indien',
          bullets: [
            'Responsive Webanwendungen mit HTML5, CSS3, JavaScript — Mobile-first.',
            'SQL/ORM-Datenbanklösungen mit Optimierung der Query-Performance implementiert.',
            'Zusammenarbeit via Git und Agile; Qualitätssicherung durch Peer-Reviews und CI.'
          ],
          tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Git']
        }
      ],
      projects: [
        {
          period: 'Jun 2025 – Heute',
          title: 'APIMyResume — Maßgeschneiderte Lebenslauf-API',
          subtitle: 'Bun · Hono · Typst · SQLite',
          bullets: [
            'Selbstgehostete REST-API: einen Master-Lebenslauf pflegen, unbegrenzt viele zielgerichtete PDFs pro Job rendern.',
            'Native Typst-Render-Pipeline; ~400 Zeilen TypeScript, ein Docker-Image, SQLite-Speicher.',
            'KI-Agent-Integration via GET /content + PATCH /bases — Bullets umschreiben, Keywords injizieren, neu rendern.',
            'Integriertes Dashboard zum Verwalten von Lebensläufen, PDF-Vorschau und API-Keys.'
          ],
          tags: ['Bun', 'Hono', 'TypeScript', 'Typst', 'SQLite', 'Docker', 'REST API']
        },
        {
          period: 'Jan 2025 – Heute',
          title: 'SwapMails — AWS Serverlose E-Mail-Plattform',
          subtitle: 'Full-Stack Web App & Chrome-Erweiterung',
          bullets: [
            'Serverlose Architektur: Lambda, SES, DynamoDB, CDK v2 — 1.000+ Nutzer, 99,9% Verfügbarkeit, 95% Kostenreduktion.',
            'Chrome-Erweiterung mit 500+ aktiven Nutzern; React.js Frontend über CloudFront CDN.',
            'RESTful API Gateway mit 10.000+ Anfragen/Tag; DSGVO-konform mit AES-256-Verschlüsselung.'
          ],
          tags: ['AWS Lambda', 'DynamoDB', 'SES', 'CDK v2', 'React.js', 'DSGVO']
        },
        {
          period: 'Jan 2023',
          title: 'Gestenerkennung — Time-of-Flight Kamera',
          subtitle: 'Python, OpenCV, Computer Vision',
          bullets: [
            '95% Genauigkeit bei Echtzeit-Gestenerkennung; 20% Reduzierung der Fehlerkennungen durch ML-Filtering.'
          ],
          tags: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning']
        }
      ],
      skills: [
        {
          label: 'Cloud',
          value:
            'AWS Experte (Lambda · EC2 · S3 · DynamoDB · IoT Core · SES · API Gateway · CloudFormation · IAM · CloudWatch) · GCP · Firebase'
        },
        {
          label: 'Sprachen',
          value: 'Python · Java · JavaScript · Go (Golang) · C/C++ · TypeScript · HTML5/CSS3'
        },
        {
          label: 'Backend',
          value:
            'Node.js · Express.js · RESTful APIs · GraphQL · Prisma · Mongoose · Microservices · Serverless · Event-Driven Architecture'
        },
        {
          label: 'Frontend',
          value:
            'React.js · Next.js · JavaScript ES6+ · Chrome-Erweiterungsentwicklung · Responsive Design'
        },
        {
          label: 'IaC/CI-CD',
          value:
            'AWS CDK v2 · CloudFormation · Terraform · GitHub Actions · CodePipeline · Jenkins · Git'
        },
        { label: 'Datenbanken', value: 'DynamoDB · PostgreSQL · MongoDB · MySQL · SQL · NoSQL' },
        {
          label: 'IoT/HW',
          value: 'AWS IoT Core · MQTT · Raspberry Pi · Arduino · ESP32/NodeMCU · KiCad · Fusion 360'
        },
        {
          label: 'DevOps',
          value:
            'Docker · Kubernetes · Prometheus · Postman · CloudWatch · X-Ray · Linux-Administration'
        }
      ],
      langsExtra: [
        ['Englisch', 'Beruflich'],
        ['Deutsch', 'Mittelstufe (B1)'],
        ['Hindi', 'Muttersprache']
      ],
      extracurricular:
        'GPHReviews (2017–2023) — Tech-Content-Creator mit 42.000+ YouTube-Abonnenten; Partnerschaften mit iOS-Entwicklern und Technologieunternehmen.',
      gphReviews: 'GPHReviews'
    },
    footer: {
      made: 'Entwickelt mit',
      in: 'in Stuttgart',
      rights: 'Alle Rechte vorbehalten'
    }
  }
};
