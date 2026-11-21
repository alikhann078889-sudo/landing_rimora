export const site = {
  name: 'RIMORA',
  tagline: 'Independent Creative Studio',
  email: 'hello@rimora.studio',
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Independent Creative Studio',
  headline: 'We create with purpose.',
  description:
    'Rimora is an independent creative brand focused on building meaningful digital experiences through thoughtful design, creativity, and innovation.',
  primaryCta: { label: 'Explore Our Work', href: '#work' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
}

export type Project = {
  title: string
  category: string
  description: string
  year: string
  image: string
  alt: string
  href: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Aurora Atelier',
    category: 'Brand Identity',
    description:
      'A complete identity for a Scandinavian fashion house — wordmark, editorial system, and packaging built on restraint.',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80&auto=format&fit=crop',
    alt: 'Minimal fashion editorial spread with oversized serif typography',
    href: '#work',
    tags: ['Identity', 'Editorial', 'Packaging'],
  },
  {
    title: 'Monolith',
    category: 'Digital Experience',
    description:
      'An immersive site for an architecture practice, pairing oversized type with slow, deliberate motion.',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop',
    alt: 'Concrete architecture facade photographed in high contrast black and white',
    href: '#work',
    tags: ['Web Design', 'Motion', 'Development'],
  },
  {
    title: 'Noir Édition',
    category: 'Art Direction',
    description:
      'Campaign direction for a fragrance launch — stark photography, negative space, and a single accent gesture.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80&auto=format&fit=crop',
    alt: 'Perfume bottle in dramatic low-key studio lighting',
    href: '#work',
    tags: ['Campaign', 'Photography', 'Direction'],
  },
  {
    title: 'Studio K',
    category: 'Website Design',
    description:
      'Portfolio and CMS for a photographer collective, designed around full-bleed imagery and quiet navigation.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80&auto=format&fit=crop',
    alt: 'Designer workspace with laptop showing a minimal portfolio layout',
    href: '#work',
    tags: ['Web Design', 'CMS', 'UX'],
  },
]

export const about = {
  body: "We believe great design is not about adding more. It's about making every detail matter. At Rimora, we combine creative thinking, strategic direction, and refined execution to create work that leaves a lasting impression.",
  stats: [
    { value: '12+', label: 'Years of practice' },
    { value: '48', label: 'Brands shaped' },
    { value: '9', label: 'Design awards' },
    { value: '6', label: 'Countries served' },
  ],
  image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format&fit=crop',
  imageAlt: 'Rimora studio table with printed type specimens, sketches, and design tools',
  imageCaption: 'The Rimora studio — Copenhagen',
  quote: 'Restraint is not the absence of ideas. It is the discipline to keep only the ones that matter.',
}

export const services = [
  {
    index: '01',
    title: 'Brand Identity',
    description: 'Naming, wordmarks, and visual systems that give brands a durable, recognizable voice.',
  },
  {
    index: '02',
    title: 'Digital Experiences',
    description: 'Immersive websites and products where motion, type, and content work as one.',
  },
  {
    index: '03',
    title: 'Website Design',
    description: 'Editorial, conversion-aware sites designed mobile-first and built to perform.',
  },
  {
    index: '04',
    title: 'Creative Direction',
    description: 'Guiding campaigns and launches from first idea to final artwork with a clear point of view.',
  },
  {
    index: '05',
    title: 'Visual Design',
    description: 'Art direction, typography, and imagery refined until every detail earns its place.',
  },
]

export const contact = {
  blurb: "Let's create something meaningful together. Tell us where you're headed — we'll help you get there with intent.",
  email: 'hello@rimora.studio',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],
}

export const footer = {
  tagline: 'An independent creative studio shaping brands and digital experiences with quiet confidence.',
  menu: nav,
  socials: contact.socials,
}
