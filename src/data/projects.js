// Edit this file to add, remove or update projects.
// Replace `cover` with your own image in src/assets/projects/, keeping the same import pattern.

import cover1 from '../assets/projects/project-01.jpg'
import cover2 from '../assets/projects/project-02.jpg'
import cover3 from '../assets/projects/project-03.jpg'
import cover4 from '../assets/projects/project-04.jpg'
import cover5 from '../assets/projects/project-05.jpg'
import cover6 from '../assets/projects/project-06.jpg'

export const categories = [
  'All',
  'Social Media',
  'Branding',
  'Marketing',
  'Posters',
  'Canva Templates',
  'Presentation',
]

export const projects = [
  {
    id: 'launch-campaign-carousel',
    title: 'Launch Campaign Carousel',
    category: 'Social Media',
    cover: cover1,
    description: 'A multi-slide Instagram carousel built to walk a new product launch from problem to offer.',
    status: 'Self-Initiated Concept',
    brandType: 'SaaS / startup (concept brief)',
    objective: 'Design a carousel that explains a product launch clearly enough to hold attention for all slides, not just the first.',
    creativeDirection: 'Confident, editorial layout with one accent color reused across every slide so the set reads as a single piece rather than six separate posts.',
    palette: ['#0D0F12', '#F5F3EF', '#C9A15A'],
    typography: 'A serif display face for slide headlines, paired with a plain sans-serif for supporting copy.',
    process: [
      'Mapped the launch message into a five-beat narrative before opening any design tool.',
      'Built a slide template in Canva with locked spacing and type rules.',
      'Refined contrast and pacing after viewing the set at thumbnail size.',
    ],
    goal: 'Give the client a reusable carousel template for future launches, not just a one-off post.',
  },
  {
    id: 'visual-identity-concept',
    title: 'Visual Identity Concept',
    category: 'Branding',
    cover: cover2,
    description: 'A lightweight visual identity system: logo mark, color palette and a small set of brand rules.',
    status: 'Self-Initiated Concept',
    brandType: 'Small business (concept brief)',
    objective: 'Build a visual system a small business could apply consistently across social, print and signage.',
    creativeDirection: 'Warm, grounded palette with a simple geometric mark that still works at favicon size.',
    palette: ['#15181D', '#E9E6DF', '#B3894A'],
    typography: 'A rounded sans-serif for the wordmark, kept legible at small sizes.',
    process: [
      'Sketched mark directions by hand before moving to Illustrator.',
      'Tested the mark in black, white and one-color versions.',
      'Documented spacing and minimum size rules in a one-page brand sheet.',
    ],
    goal: 'Deliver a system simple enough for a non-designer to apply correctly on their own.',
  },
  {
    id: 'promotional-banner-set',
    title: 'Promotional Banner Set',
    category: 'Marketing',
    cover: cover3,
    description: 'A set of promotional banners sized for web, social and email, sharing one visual language.',
    status: 'Self-Initiated Concept',
    brandType: 'E-commerce brand (concept brief)',
    objective: 'Design banners that stay legible across very different aspect ratios without redesigning from scratch each time.',
    creativeDirection: 'A flexible grid with one fixed focal element, so the layout adapts to wide, square and tall formats.',
    palette: ['#0A0C0E', '#F5F3EF', '#C9A15A'],
    typography: 'A single bold sans-serif for pricing and offers, sized for quick scanning.',
    process: [
      'Defined the tightest aspect ratio first, then expanded outward.',
      'Built the layout as a flexible grid rather than fixed pixel positions.',
      'Checked legibility at actual display size on a phone screen.',
    ],
    goal: 'Reduce the time needed to produce a new banner for each promotion.',
  },
  {
    id: 'event-poster-series',
    title: 'Event Poster Series',
    category: 'Posters',
    cover: cover4,
    description: 'A three-poster series for a recurring event, sharing a system rather than a single layout.',
    status: 'Self-Initiated Concept',
    brandType: 'Education / community event (concept brief)',
    objective: 'Create a poster system flexible enough to cover three different event dates without looking repetitive.',
    creativeDirection: 'Consistent type and grid, with the accent color shifting slightly to distinguish each date.',
    palette: ['#111318', '#F5F3EF', '#C9A15A'],
    typography: 'A tall condensed display face for the headline date, kept out of the way of supporting details.',
    process: [
      'Set the information hierarchy first: date, then title, then details.',
      'Built one master layout, then varied it across the series.',
      'Printed a test copy to check contrast and legibility from a distance.',
    ],
    goal: 'Give the organizer a template they can reuse for future events.',
  },
  {
    id: 'editable-template-kit',
    title: 'Editable Template Kit',
    category: 'Canva Templates',
    cover: cover5,
    description: 'A small kit of editable Canva templates for a content creator to manage their own posting schedule.',
    status: 'Self-Initiated Concept',
    brandType: 'Content creator (concept brief)',
    objective: 'Design templates a non-designer could edit confidently without breaking the layout.',
    creativeDirection: 'Locked structural elements with clearly marked editable zones for text and images.',
    palette: ['#0D0F12', '#E9E6DF', '#C9A15A'],
    typography: 'Two weights of one sans-serif family, kept simple for easy substitution.',
    process: [
      'Identified the recurring post types the creator actually needed.',
      'Built each template with locked and unlocked elements in Canva.',
      'Wrote short usage notes so the templates could be handed off cleanly.',
    ],
    goal: 'Let the creator produce on-brand posts without needing a designer each time.',
  },
  {
    id: 'pitch-deck-redesign',
    title: 'Pitch Deck Redesign',
    category: 'Presentation',
    cover: cover6,
    description: 'A visual redesign of a plain pitch deck, focused on clarity and pacing over decoration.',
    status: 'Self-Initiated Concept',
    brandType: 'Early-stage startup (concept brief)',
    objective: 'Rebuild a text-heavy deck so each slide carries one idea instead of several.',
    creativeDirection: 'Generous whitespace, one accent color used only for emphasis, and a consistent slide grid throughout.',
    palette: ['#0A0C0E', '#F5F3EF', '#C9A15A'],
    typography: 'Serif display for slide titles, sans-serif for supporting data and labels.',
    process: [
      'Split dense slides into single-idea slides before styling anything.',
      'Built a master template first, then applied it to every slide.',
      'Reviewed the deck at presentation speed, not just as static slides.',
    ],
    goal: 'Make the deck easier to present out loud, not just easier to look at.',
  },
]
