import {
  CalendarClock,
  Globe2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { TrustPoint } from "@/types";

const trustPoints: TrustPoint[] = [
  {
    id: "disponibilidad",
    title: "Disponibilidad 24/7",
    description:
      "Atendemos emergencias, turnos nocturnos y paradas de planta con respuesta inmediata y equipos listos para operar.",
    icon: CalendarClock,
    stat: "24/7",
    statLabel: "Soporte y emergencias",
  },
  {
    id: "seguridad",
    title: "Seguridad ante todo",
    description:
      "Operadores con SCTR vigente, procedimientos de izaje y protocolos de seguridad alineados a la normativa peruana.",
    icon: ShieldCheck,
    stat: "100%",
    statLabel: "Personal con SCTR",
  },
  {
    id: "cobertura",
    title: "Cobertura todo Lima Metropolitana y Callao",
    description:
      "Llegamos a Lima y provincias con logística propia y capacidad de movilizar equipos a cualquier unidad minera u obra.",
    icon: Globe2,
    stat: "24",
    statLabel: "Regiones atendidas",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento preventivo",
    description:
      "Cada equipo cuenta con plan de mantenimiento e inspección técnico-mecánica para reducir fallas y tiempos muertos.",
    icon: Wrench,
    stat: "0",
    statLabel: "Paradas no programadas",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="por-que-elegirnos"
      className="scroll-mt-24 bg-muted/50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Por qué elegirnos</Badge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Alquilar con MyM Montacargas es operar sin riesgos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Combinamos flota moderna, personal certificado y respaldo técnico
            para que tu proyecto avance seguro, dentro del plazo y del
            presupuesto.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.id} delay={index * 0.08} className="h-full">
                <Card className="h-full border-border bg-card transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col p-6">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold">
                      {point.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="font-heading text-2xl font-bold text-primary">
                        {point.stat}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {point.statLabel}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
