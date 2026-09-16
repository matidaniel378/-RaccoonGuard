import { NavItem, PillTag, AvatarBadge, HudCallout } from '../types';
import defaultGlassesProfile from '../assets/images/react_smart_glasses_1789551190352.jpg';

export const HERO_IMAGE_CONFIG = {
  src: defaultGlassesProfile || '/images/smart-glasses-profile.jpg',
  alt: 'REACT Commercial Smart Eyewear — Precision Titanium Chassis with Micro-Waveguide Optics',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'optical-engineering', label: 'Optical Engineering', href: '#optical-engineering' },
  { id: 'commercial-solutions', label: 'Commercial Solutions', href: '#commercial-solutions' },
  { id: 'specifications', label: 'Hardware & Compliance', href: '#specifications' },
  { id: 'procurement', label: 'Procurement', href: '#procurement' },
];

export const PILL_TAGS: PillTag[] = [
  { id: 'enterprise-optical', label: 'Enterprise Optical Architecture', iconName: 'eye' },
  { id: 'commercial-ready', label: 'Commercial Procurement Ready', iconName: 'shield' },
];

export const HERO_HEADLINE = {
  line1: 'Precision Optics.',
  highlighted: 'Commercial Scale.',
  line3: 'Engineered for Enterprise Eyewear.',
};

export const HERO_SUBHEADLINE =
  'Commercial-grade smart eyewear engineered for optical retail chains, enterprise fleets, and healthcare procurement. Built with prescription-compatible titanium frames, foveated micro-waveguide optics, and hardware-secured on-device intelligence.';

export const AVATAR_BADGES: AvatarBadge[] = [
  {
    id: 'partner-1',
    name: 'Precision Optical Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    role: 'Tier-1 Optical Surfacing Partner',
  },
  {
    id: 'partner-2',
    name: 'Clinical Vision Group',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    role: 'Enterprise Healthcare Partner',
  },
  {
    id: 'partner-3',
    name: 'Global Eyewear Logistics',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    role: 'Commercial Fleet Distributor',
  },
];

export const HUD_CALLOUTS: HudCallout[] = [
  {
    id: 'hud-waveguide',
    label: 'Micro-OLED Waveguide',
    sublabel: 'Foveated 1080p glance display · 3,500 nits',
    position: { top: '38%', left: '46%' },
  },
  {
    id: 'hud-audio',
    label: 'Directional Acoustic Beam',
    sublabel: 'Whisper-quiet bone conduction (< 1dB leakage)',
    position: { top: '48%', left: '80%' },
  },
  {
    id: 'hud-neural',
    label: 'Edge Neural Coprocessor',
    sublabel: 'Air-gapped on-device inference (12ms latency)',
    position: { top: '32%', left: '68%' },
  },
];
