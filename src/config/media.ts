import type { HeroBackground } from "@/types";

/**
 * Builds an optimized Unsplash CDN URL. Swap the photo id (or point `src`
 * at a local file in /public) to use your own real photography.
 */
export function unsplash(photoId: string, width = 1600): string {
  const id = photoId.startsWith("photo-") ? photoId : `photo-${photoId}`;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(width),
    q: "80",
  });
  return `https://images.unsplash.com/${id}?${params.toString()}`;
}

/** Default hero background. Override it via the `HeroSection` `background` prop. */
export const heroBackground: HeroBackground = {
  src: unsplash("photo-1759826350352-c5b0b77729bd", 2400),
  alt: "Montacargas moviendo contenedores en una terminal portuaria",
  position: "center",
  overlay: "dark",
  credit: {
    author: "Solømen",
    href: "https://unsplash.com/photos/EoS4ZFRJCJ4",
  },
};

/** Real reference photos used across the fleet catalog. */
export const fleetImages = {
  contrabalance: unsplash("photo-1620388640785-892616248ec8", 1200),
  electricoReach: unsplash("photo-1740914994657-f1cdffdc418e", 1200),
  todoTerreno: unsplash("photo-1718506921607-8b238f2a7303", 1200),
  gruaTelescopica: unsplash("photo-1583246820648-e06ee5e2c267", 1200),
  gruaArticulada: unsplash("photo-1642864258915-fa204759b23f", 1200),
  plataformaTijera: unsplash("photo-1756402664856-91a90f90b70b", 1200),
} as const;
