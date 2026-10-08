import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { IconComponent, SocialPlatform } from "@/types";

const socialIcons: Record<SocialPlatform, IconComponent> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <footer className="border-t border-white/10 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-mark.svg"
                alt={`Logo de ${siteConfig.name}`}
                width={48}
                height={48}
                className="size-12"
              />
              <span className="font-heading text-xl font-bold tracking-tight">
                MyM <span className="text-primary">Montacargas</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {siteConfig.social.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-secondary-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="size-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Empresa
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4.5 shrink-0 text-primary" />
                <span className="text-secondary-foreground/70">
                  {siteConfig.contact.fullAddress}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4.5 shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-secondary-foreground/70 transition-colors hover:text-primary"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4.5 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-secondary-foreground/70 transition-colors hover:text-primary"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4.5 shrink-0 text-primary" />
                <div className="space-y-1 text-secondary-foreground/70">
                  {siteConfig.hours.map((hour) => (
                    <p key={hour.day}>
                      <span className="font-medium text-secondary-foreground/90">
                        {hour.day}:
                      </span>{" "}
                      {hour.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-6 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-all hover:brightness-95",
              )}
            >
              <MessageCircle className="size-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Ubícanos
            </h3>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Ubicación de MyM Montacargas"
                src={siteConfig.contact.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-52 w-full grayscale-[0.2]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-secondary-foreground/60 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {siteConfig.legal.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
