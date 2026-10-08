"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import type { ContactChannel } from "@/types";

const channels: ContactChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: siteConfig.contact.phoneDisplay,
    href: buildWhatsAppUrl(),
    description: siteConfig.responseTime,
    icon: MessageCircle,
  },
  {
    id: "telefono",
    label: "Central telefónica",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phone}`,
    description: "Atención directa con un asesor",
    icon: Phone,
  },
  {
    id: "correo",
    label: "Correo comercial",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Envíanos tu requerimiento o bases",
    icon: Mail,
  },
  {
    id: "direccion",
    label: "Base operativa",
    value: `${siteConfig.contact.district}, ${siteConfig.contact.city}`,
    href: siteConfig.contact.mapEmbedUrl,
    description: siteConfig.contact.addressLine,
    icon: MapPin,
  },
];

interface FormState {
  name: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Alquiler de montacargas",
  "Alquiler de camión grúa",
  "Operadores / riggers certificados",
  "Proyecto integral (equipo + operador)",
];

const inputClass =
  "h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      "Hola MyM Montacargas, deseo solicitar una cotización.",
      `• Nombre: ${form.name}`,
      form.company ? `• Empresa: ${form.company}` : null,
      `• Teléfono: ${form.phone}`,
      form.service ? `• Servicio: ${form.service}` : null,
      form.message ? `• Detalle: ${form.message}` : null,
    ].filter((line): line is string => Boolean(line));

    window.open(
      buildWhatsAppUrl({ message: lines.join("\n") }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-muted/50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Contacto</Badge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Solicita tu cotización hoy mismo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Completa el formulario y recibirás tu propuesta por WhatsApp, o
            contáctanos por cualquiera de nuestros canales directos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Reveal key={channel.id} delay={index * 0.06}>
                    <a
                      href={channel.href}
                      target={
                        channel.id === "whatsapp" ? "_blank" : undefined
                      }
                      rel={
                        channel.id === "whatsapp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate font-semibold">
                          {channel.value}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {channel.description}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.24}>
              <Card className="mt-4">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4.5 text-primary" />
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
                      Horario de atención
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    {siteConfig.hours.map((hour) => (
                      <li
                        key={hour.day}
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="text-muted-foreground">
                          {hour.day}
                        </span>
                        <span
                          className={
                            hour.highlight
                              ? "font-semibold text-foreground"
                              : "font-medium text-primary"
                          }
                        >
                          {hour.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre y apellido *
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ej. Juan Pérez"
                          className={inputClass}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Empresa
                        </label>
                        <input
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Ej. Constructora Andina S.A."
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+51 999 999 999"
                          className={inputClass}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Servicio requerido
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Selecciona una opción</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Detalle del requerimiento
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Indícanos equipo, capacidad, ubicación y fechas del proyecto."
                        className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-muted-foreground">
                        Al enviar, se abrirá WhatsApp con tu solicitud lista para
                        enviar.
                      </p>
                      <Button type="submit" variant="whatsapp" size="lg">
                        <Send />
                        Enviar solicitud
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
