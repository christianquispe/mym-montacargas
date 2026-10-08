import type {
  BusinessHour,
  LegalLink,
  NavItem,
  SocialLink,
  Stat,
} from "@/types";

export const siteConfig = {
  name: "MyM Montacargas",
  legalName: "MyM Montacargas S.A.C.",
  shortName: "MyM",
  tagline:
    "Alquiler de montacargas y camiones grúa con operador certificado en todo el Perú.",
  description:
    "MyM Montacargas alquila montacargas de 2.5t a 15t, camiones grúa de 20t a 150t y operadores/riggers certificados con SCTR. Cobertura todo Lima Metropolitana y Callao, mantenimiento preventivo y atención 24/7.",
  url: "https://www.mymmontacargas.com",
  locale: "es_PE",

  contact: {
    phoneDisplay: "+51 999 888 777",
    phone: "+51999888777",
    whatsapp: "51999888777",
    email: "ventas@mymmontacargas.com",
    addressLine: "Av. Los Andes 1234, Parque Industrial",
    district: "Ate",
    city: "Lima",
    country: "Perú",
    fullAddress: "Av. Los Andes 1234, Parque Industrial, Ate, Lima, Perú",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Av.+Los+Andes+1234,+Ate,+Lima,+Peru&output=embed",
  },

  responseTime: "Respuesta en menos de 15 minutos",
  emergencyLabel: "Atención de emergencias 24/7",

  hours: [
    { day: "Lunes a Viernes", hours: "07:00 - 19:00", highlight: true },
    { day: "Sábados", hours: "08:00 - 16:00", highlight: true },
    { day: "Domingos y feriados", hours: "Atención de emergencias 24/7" },
  ] satisfies BusinessHour[],

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
    { label: "Flota", href: "#flota" },
    { label: "Contacto", href: "#contacto" },
  ] satisfies NavItem[],

  social: [
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://facebook.com/mymmontacargas",
    },
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://instagram.com/mymmontacargas",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/company/mymmontacargas",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://youtube.com/@mymmontacargas",
    },
  ] satisfies SocialLink[],

  legal: [
    { label: "Términos y condiciones", href: "/terminos" },
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Libro de reclamaciones", href: "/reclamaciones" },
  ] satisfies LegalLink[],

  stats: [
    { value: "10+", label: "Años en el sector" },
    { value: "500+", label: "Proyectos atendidos" },
    { value: "2.5t - 150t", label: "Capacidad de izaje" },
    { value: "100%", label: "Operadores certificados" },
  ] satisfies Stat[],
};

export const defaultWhatsAppMessage =
  "Hola MyM Montacargas, quisiera solicitar una cotización para el alquiler de equipo con operador.";

interface WhatsAppOptions {
  message?: string;
}

export function buildWhatsAppUrl({ message }: WhatsAppOptions = {}): string {
  const text = encodeURIComponent(message ?? defaultWhatsAppMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}

export function buildFleetWhatsAppUrl(equipmentName: string): string {
  return buildWhatsAppUrl({
    message: `Hola MyM Montacargas, deseo cotizar el alquiler de: ${equipmentName}. ¿Podrían enviarme disponibilidad y tarifa con operador?`,
  });
}
