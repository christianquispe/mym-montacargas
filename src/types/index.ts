import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
}

export type SocialPlatform = "facebook" | "instagram" | "linkedin" | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
  highlight?: boolean;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type ServiceId = "montacargas" | "camiones-grua" | "operadores";

export interface Service {
  id: ServiceId;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stat: string;
  statLabel: string;
}

export type FleetCategory = "montacargas" | "camiones-grua" | "plataformas";

export interface FleetSpec {
  label: string;
  value: string;
}

export interface FleetItem {
  id: string;
  name: string;
  category: FleetCategory;
  categoryLabel: string;
  capacity: string;
  liftHeight: string;
  power: string;
  image: string;
  badges: string[];
  specs: FleetSpec[];
  highlight?: boolean;
}

export interface FleetCategoryFilter {
  id: FleetCategory | "todos";
  label: string;
}

export interface WhatsAppContext {
  subject: string;
  message?: string;
}

export type HeroOverlay = "dark" | "medium" | "light";

export interface ImageCredit {
  author: string;
  href: string;
}

export interface HeroBackground {
  /** Remote (https) or local (/public) image source. */
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center 30%". Defaults to "center". */
  position?: string;
  /** Overlay strength to keep the copy readable. Defaults to "dark". */
  overlay?: HeroOverlay;
  /** Optional photographer/source attribution. */
  credit?: ImageCredit;
}
