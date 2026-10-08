"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { fleetImages } from "@/config/media";
import { buildFleetWhatsAppUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import type { FleetCategory, FleetCategoryFilter, FleetItem } from "@/types";

const filters: FleetCategoryFilter[] = [
  { id: "todos", label: "Toda la flota" },
  { id: "montacargas", label: "Montacargas" },
  { id: "camiones-grua", label: "Camiones grúa" },
  { id: "plataformas", label: "Plataformas" },
];

const fleet: FleetItem[] = [
  {
    id: "contrabalance",
    name: "Montacargas Contrabalance",
    category: "montacargas",
    categoryLabel: "Montacargas",
    capacity: "2.5t – 5t",
    liftHeight: "Hasta 6 m",
    power: "GLP / Diésel",
    image: fleetImages.contrabalance,
    badges: ["Contrabalance", "Uñas ajustables"],
    highlight: true,
    specs: [
      { label: "Mástil", value: "Dúplex / Triple" },
      { label: "Neumáticos", value: "Sólidos" },
      { label: "Operador", value: "Incluido" },
    ],
  },
  {
    id: "electrico-reach",
    name: "Montacargas Eléctrico Reach",
    category: "montacargas",
    categoryLabel: "Montacargas",
    capacity: "2.5t – 3t",
    liftHeight: "Hasta 9 m",
    power: "Eléctrico (litio)",
    image: fleetImages.electricoReach,
    badges: ["Cero emisiones", "Interiores"],
    specs: [
      { label: "Mástil", value: "Triple reach" },
      { label: "Batería", value: "Litio / oportunidad" },
      { label: "Operador", value: "Incluido" },
    ],
  },
  {
    id: "todo-terreno",
    name: "Montacargas Todo Terreno",
    category: "montacargas",
    categoryLabel: "Montacargas",
    capacity: "5t – 15t",
    liftHeight: "Hasta 7 m",
    power: "Diésel 4x4",
    image: fleetImages.todoTerreno,
    badges: ["Alta capacidad", "Obra y mina"],
    specs: [
      { label: "Tracción", value: "4x4" },
      { label: "Neumáticos", value: "Off-road" },
      { label: "Operador", value: "Incluido" },
    ],
  },
  {
    id: "grua-telescopica",
    name: "Camión Grúa Telescópica",
    category: "camiones-grua",
    categoryLabel: "Camiones grúa",
    capacity: "20t – 50t",
    liftHeight: "Hasta 40 m",
    power: "Grúa sobre camión",
    image: fleetImages.gruaTelescopica,
    badges: ["Plumín telescópico", "Izaje certificado"],
    highlight: true,
    specs: [
      { label: "Rotación", value: "360° continuo" },
      { label: "Estudio de izaje", value: "Incluido" },
      { label: "Rigger", value: "Incluido" },
    ],
  },
  {
    id: "grua-articulada",
    name: "Camión Grúa Articulada",
    category: "camiones-grua",
    categoryLabel: "Camiones grúa",
    capacity: "30t – 80t",
    liftHeight: "Hasta 32 m",
    power: "Grúa articulada",
    image: fleetImages.gruaArticulada,
    badges: ["Canastilla", "Trabajo en altura"],
    specs: [
      { label: "Alcance lateral", value: "Amplio" },
      { label: "Canastilla", value: "Disponible" },
      { label: "Rigger", value: "Incluido" },
    ],
  },
  {
    id: "plataforma-tijera",
    name: "Plataforma Elevadora de Tijera",
    category: "plataformas",
    categoryLabel: "Plataformas",
    capacity: "300 kg – 1.2t",
    liftHeight: "Hasta 18 m",
    power: "Eléctrica / Diésel",
    image: fleetImages.plataformaTijera,
    badges: ["Trabajo en altura", "Certificada"],
    specs: [
      { label: "Plataforma", value: "Antideslizante" },
      { label: "Estabilizadores", value: "Hidráulicos" },
      { label: "Operador", value: "Incluido" },
    ],
  },
];

export function FleetSection() {
  const [activeCategory, setActiveCategory] = useState<
    FleetCategory | "todos"
  >("todos");

  const filtered =
    activeCategory === "todos"
      ? fleet
      : fleet.filter((item) => item.category === activeCategory);

  return (
    <section id="flota" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Catálogo de equipos</Badge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestra flota, lista para tu proyecto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Explora los equipos disponibles, revisa sus especificaciones
            técnicas y solicita una cotización directa por WhatsApp en un clic.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveCategory(filter.id)}
              aria-pressed={activeCategory === filter.id}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                activeCategory === filter.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-secondary/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <Badge key={badge} variant="dark">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  {item.highlight && (
                    <Badge className="absolute right-3 top-3">
                      Más solicitado
                    </Badge>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {item.categoryLabel}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">
                    {item.name}
                  </h3>

                  <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4 text-center">
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Capacidad
                      </dt>
                      <dd className="mt-1 text-sm font-semibold">
                        {item.capacity}
                      </dd>
                    </div>
                    <div className="border-x border-border">
                      <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Altura
                      </dt>
                      <dd className="mt-1 text-sm font-semibold">
                        {item.liftHeight}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Energía
                      </dt>
                      <dd className="mt-1 text-sm font-semibold">
                        {item.power}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-4 space-y-2">
                    {item.specs.map((spec) => (
                      <li
                        key={spec.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">
                          {spec.label}
                        </span>
                        <span className="font-medium">{spec.value}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="whatsapp"
                    className="mt-6 w-full"
                  >
                    <a
                      href={buildFleetWhatsAppUrl(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle />
                      Cotizar este equipo
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
