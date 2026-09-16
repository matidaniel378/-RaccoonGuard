import { NavItem, PillTag, AvatarBadge, HudCallout } from '../types';
import defaultGlassesProfile from '../assets/images/smart_glasses_clothes_1789547429929.jpg';

/**
 * CUSTOM ASSET PLUG-IN:
 * You can replace this path with your own custom side-profile image asset.
 * Drop your image into `/public/images/` or import directly from `/src/assets/`.
 */
export const HERO_IMAGE_CONFIG = {
  src: defaultGlassesProfile || '/images/smart-glasses-profile.jpg',
  alt: 'Person wearing REACT cognitive smart glasses - side profile view',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'how-it-works', label: 'How it works', href: '#how-it-works' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'use-cases', label: 'Use cases', href: '#use-cases' },
];

export const PILL_TAGS: PillTag[] = [
  { id: 'visual-glance', label: 'Visual glance', iconName: 'eye' },
  { id: 'hands-free', label: 'Hands-free', iconName: 'hand' },
];

export const HERO_HEADLINE = {
  line1: 'Think Smarter.',
  highlighted: 'React Faster.',
  line3: 'Evolve Daily.',
};

export const HERO_SUBHEADLINE =
  'Next-gen cognitive smart glasses designed to sharpen your focus, enhance memory, and accelerate your decision-making in real time.';

export const AVATAR_BADGES: AvatarBadge[] = [
  {
    id: 'user-1',
    name: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    role: 'Neuroscientist',
  },
  {
    id: 'user-2',
    name: 'Marcus Vance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    role: 'Product Lead',
  },
  {
    id: 'user-3',
    name: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    role: 'AI Researcher',
  },
];

export const HUD_CALLOUTS: HudCallout[] = [
  {
    id: 'hud-waveguide',
    label: 'Micro-OLED Waveguide',
    sublabel: 'Foveated 1080p glance display',
    position: { top: '38%', left: '46%' },
  },
  {
    id: 'hud-audio',
    label: 'Directional Audio Beam',
    sublabel: 'Whisper-quiet bone conduction',
    position: { top: '48%', left: '80%' },
  },
  {
    id: 'hud-neural',
    label: 'Cognitive Engine',
    sublabel: 'On-device 12ms neural coprocessor',
    position: { top: '32%', left: '68%' },
  },
];
