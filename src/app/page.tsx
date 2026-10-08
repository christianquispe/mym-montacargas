import { MessageCircle } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { FleetSection } from "@/components/sections/FleetSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}/og-image.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressLine,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.district,
      addressCountry: "PE",
    },
    areaServed: {
      "@type": "Country",
      name: "Perú",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: siteConfig.social.map((social) => social.href),
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <FleetSection />
        <ContactSection />
      </main>
      <Footer />

      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar cotización por WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/40 transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
