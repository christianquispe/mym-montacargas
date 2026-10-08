import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  MessageCircle,
  ShieldCheck,
  Timer,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { heroBackground } from "@/config/media";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { HeroBackground, HeroOverlay } from "@/types";

const highlights = [
  { label: "Capacidad de montacargas", value: "2.5t – 15t" },
  { label: "Capacidad de camión grúa", value: "20t – 150t" },
  { label: "Cobertura", value: "Lima Metropolitana y Callao" },
  { label: "Disponibilidad", value: "24/7" },
];

const gradientByTone: Record<HeroOverlay, string> = {
  dark: "from-secondary/95 via-secondary/55 to-transparent",
  medium: "from-secondary/85 via-secondary/35 to-transparent",
  light: "from-secondary/70 via-secondary/20 to-transparent",
};

interface HeroSectionProps {
  /** Background image. Defaults to `heroBackground` from `@/config/media`. */
  background?: HeroBackground;
}

export function HeroSection({ background = heroBackground }: HeroSectionProps) {
  const whatsappUrl = buildWhatsAppUrl();
  const overlay = background.overlay ?? "dark";

  return (
    <section
      id="inicio"
      className="relative isolate scroll-mt-24 overflow-hidden bg-secondary text-white"
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          key={background.src}
          src={background.src}
          alt={background.alt}
          fill
          priority
          sizes="100vw"
          className="animate-hero-zoom object-cover motion-reduce:animate-none"
          style={{ objectPosition: background.position ?? "center" }}
        />
        <div className="absolute inset-0 bg-secondary/10" />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r",
            gradientByTone[overlay],
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-transparent to-secondary/10" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-primary/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <Badge variant="dark" className="text-white/90">
              <ShieldCheck className="text-primary" />
              Operadores certificados con SCTR vigente
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[3.4rem]">
              Alquiler de Montacargas y Camiones Grúa con Operador Certificado{" "}
              <span className="text-primary">| {siteConfig.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
              Movemos tu operación con montacargas de 2.5t a 15t y camiones grúa
              de 20t a 150t, respaldados por operadores y riggers certificados,
              mantenimiento preventivo y cobertura todo Lima Metropolitana y Callao. Solicita tu equipo
              y recíbelo listo para operar.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Solicitar cotización
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <a href="#flota">
                  Ver flota disponible
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <ClipboardList className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold">
                    Cotización en minutos
                  </p>
                  <p className="text-sm text-white/60">{siteConfig.responseTime}</p>
                </div>
              </div>

              <dl className="mt-7 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-white/60">{item.label}</dt>
                    <dd className="font-heading text-base font-semibold text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex items-start gap-3 rounded-xl bg-primary/10 p-4">
                <Timer className="mt-0.5 size-4.5 shrink-0 text-primary" />
                <p className="text-sm text-white/75">
                  {siteConfig.emergencyLabel}. Ajustamos la flota a la ventana de
                  tu proyecto, obra o parada de planta.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/75 backdrop-blur-md">
              <BadgeCheck className="size-5 shrink-0 text-primary" />
              Equipos con mantenimiento preventivo y documentación en regla.
            </div>
          </Reveal>
        </div>
      </div>

      {background.credit && (
        <p className="absolute bottom-3 right-4 z-10 text-[10px] font-medium text-white/40">
          Foto:{" "}
          <a
            href={background.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-white/70 hover:underline"
          >
            {background.credit.author}
          </a>{" "}
          · Unsplash
        </p>
      )}
    </section>
  );
}
