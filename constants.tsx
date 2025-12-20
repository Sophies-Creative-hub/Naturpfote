
import React from 'react';
import { Service, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ernaehrung',
    title: 'Ernährungsberatung',
    description: 'Individuelle Futterpläne (BARF, Kochen, Fertigfutter) abgestimmt auf Alter, Rasse und Krankheitsbild für ein langes, gesundes Leben.',
    price: 'ab 85€',
    category: 'Allgemein',
    icon: '🌿'
  },
  {
    id: 'homoeopathie',
    title: 'Klassische Homöopathie',
    description: 'Ganzheitliche Behandlung akuter und chronischer Beschwerden durch gezielte Aktivierung der Selbstheilungskräfte nach Hahnemann.',
    price: '95€',
    category: 'Allgemein',
    icon: '💧'
  },
  {
    id: 'phytotherapie',
    title: 'Pflanzenheilkunde',
    description: 'Die Kraft der Kräuter nutzen: Unterstützung von Organen und Immunsystem durch die Apotheke der Natur.',
    price: 'ab 45€',
    category: 'Allgemein',
    icon: '🍃'
  },
  {
    id: 'labor',
    title: 'Labordiagnostik',
    description: 'Fundierte Fakten statt Raten: Kotprofile, Urinanalysen und Blutbilder für eine präzise Therapieplanung.',
    price: 'nach Aufwand',
    category: 'Allgemein',
    icon: '🔬'
  },
  {
    id: 'mykotherapie',
    title: 'Heilpilze',
    description: 'Vitalpilze zur Regulation des Immunsystems und als wertvolle Begleitung bei Tumorerkrankungen oder Allergien.',
    price: 'ab 50€',
    category: 'Allgemein',
    icon: '🍄'
  },
  {
    id: 'bachblueten',
    title: 'Seelische Balance',
    description: 'Bachblüten zur sanften Unterstützung bei Angst, Stress oder traumatischen Erlebnissen im Tieralltag.',
    price: '35€',
    category: 'Allgemein',
    icon: '🌸'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Frühlings-Detox für Hunde',
    excerpt: 'Wie Brennnessel und Löwenzahn den Fellwechsel unterstützen und den Stoffwechsel sanft ankurbeln.',
    content: '',
    date: '15. März 2024',
    category: 'Gesundheit',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=800&auto=format'
  },
  {
    id: '2',
    title: 'Futterdeklaration verstehen',
    excerpt: 'Was steckt wirklich im Napf? Ein Leitfaden durch den Dschungel der Inhaltsstoffe bei Katzenfutter.',
    content: '',
    date: '02. April 2024',
    category: 'Ernährung',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format'
  }
];

export const Icons = {
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
};
