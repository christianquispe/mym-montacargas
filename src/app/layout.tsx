import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";

import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Alquiler de Montacargas y Camiones Grúa con Operador Certificado | MyM Montacargas",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "alquiler de montacargas",
    "alquiler de camión grúa",
    "montacargas con operador",
    "camiones grúa Perú",
    "izaje y montaje",
    "operadores certificados SCTR",
    "riggers certificados",
    "MyM Montacargas",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Alquiler de Montacargas y Camiones Grúa con Operador Certificado | MyM Montacargas",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MyM Montacargas - Alquiler de montacargas y camiones grúa con operador certificado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alquiler de Montacargas y Camiones Grúa con Operador | MyM Montacargas",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
