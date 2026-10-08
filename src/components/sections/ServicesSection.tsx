import { ArrowUpRight, Check, Forklift, HardHat, Truck } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppUrl } from "@/config/site";
import type { Service } from "@/types";

const services: Service[] = [
  {
    id: "montacargas",
    title: "Alquiler de Montacargas",
    tagline: "2.5t – 15t",
    description:
      "Flota de montacargas contrabalance, reach y todo terreno para almacenes, plantas y obra, con accesorios según tu carga.",
    capabilities: [
      "Contrabalance, reach y todo terreno",
      "Combustión, GLP y eléctricos",
      "Accesorios: uñas, clamps y rotadores",
      "Entrega, instalación y capacitación",
    ],
    icon: Forklift,
  },
  {
    id: "camiones-grua",
    title: "Camiones Grúa",
    tagline: "20t – 150t",
    description:
      "Servicio de izaje y montaje con camiones grúa telescópicos y articulados para proyectos industriales y de construcción.",
    capabilities: [
      "Grúas telescópicas y articuladas",
      "Izaje, montaje e instalación",
      "Estudio de izaje y plan de maniobra",
      "Rigger y señalético certificado",
    ],
    icon: Truck,
  },
  {
    id: "operadores",
    title: "Operadores y Riggers Certificados",
    tagline: "Cumplimiento SCTR",
    description:
      "Personal calificado para operar y dirigir maniobras seguras, con documentación y SCTR vigente para tu auditoría.",
    capabilities: [
      "Operadores con licencia y SCTR vigente",
      "Riggers y señaléticos certificados",
      "Supervisión de seguridad en obra",
      "Documentación y permisos al día",
    ],
    icon: HardHat,
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Nuestros servicios</Badge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Equipos y operadores para cada maniobra
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Soluciones integrales de alquiler de maquinaria pesada con personal
            certificado, cobertura todo Lima Metropolitana y Callao y planes de mantenimiento
            incluidos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsappUrl = buildWhatsAppUrl({
              message: `Hola MyM Montacargas, deseo cotizar el servicio de ${service.title}. ¿Me comparten disponibilidad y tarifas?`,
            });

            return (
              <Reveal key={service.id} delay={index * 0.08} className="h-full">
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-secondary/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                        <Icon className="size-6" />
                      </span>
                      <Badge variant="success">{service.tagline}</Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="ghost" className="px-0 hover:bg-transparent">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Solicitar cotización
                        <ArrowUpRight />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
