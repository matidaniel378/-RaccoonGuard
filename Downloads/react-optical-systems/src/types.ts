export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface PillTag {
  id: string;
  label: string;
  iconName?: 'eye' | 'hand' | 'sparkles' | 'zap' | 'shield';
}

export interface AvatarBadge {
  id: string;
  name: string;
  image: string;
  role?: string;
}

export interface HudCallout {
  id: string;
  label: string;
  sublabel: string;
  position: {
    top: string;
    left: string;
  };
}

export type ThemeMode = 'light' | 'dark';
