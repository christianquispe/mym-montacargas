"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-background",
      )}
    >
      <div
        className={cn(
          "hidden overflow-hidden border-b border-white/10 bg-secondary text-secondary-foreground transition-all duration-300 lg:block",
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5 text-primary" />
              {siteConfig.emergencyLabel}
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="size-3.5 text-primary" />
              {siteConfig.contact.email}
            </a>
          </div>
          <span className="inline-flex items-center gap-2 text-secondary-foreground/70">
            <MapPin className="size-3.5 text-primary" />
            {siteConfig.contact.district}, {siteConfig.contact.city} · Cobertura todo Lima Metropolitana y Callao
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:h-20">
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${siteConfig.name} - Inicio`}
        >
          <Image
            src="/logo-mark.svg"
            alt={`Logo de ${siteConfig.name}`}
            width={44}
            height={44}
            priority
            className="size-11"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight">
              MyM <span className="text-primary">Montacargas</span>
            </span>
            <span className="mt-1 hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Alquiler con operador certificado
            </span>
          </span>
        </a>

        <Navbar items={siteConfig.nav} />

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden xl:inline-flex">
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone />
              {siteConfig.contact.phoneDisplay}
            </a>
          </Button>

          <Button asChild variant="whatsapp" className="hidden sm:inline-flex">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Solicitar cotización
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-5">
              <Navbar
                items={siteConfig.nav}
                orientation="vertical"
                onNavigate={() => setIsMenuOpen(false)}
              />
              <div className="mt-5 grid gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                    Solicitar cotización
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    <Phone />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
