import type { BenefitsContent } from "../types/benefits.types";

export const benefitsContent: Record<string, BenefitsContent> = {
  en: {
    badge: "Benefits",

    title: "Results that generate more opportunities.",

    description:
      "Every element is designed to help you attract more clients, build trust, and improve your business’s digital experience.",

    items: [
      {
        image: "/images/benefits/visibility.png",
        title: "Greater visibility",
      },
      {
        image: "/images/benefits/conversion.png",
        title: "More conversions",
      },
      {
        image: "/images/benefits/experience.png",
        title: "Better experience",
      },
      {
        image: "/images/benefits/growth.png",
        title: "Business growth boost",
      },
    ],
  },

  es: {
    badge: "Beneficios",

    title: "Resultados que generan más oportunidades.",

    description:
      "Cada elemento está diseñado para ayudarte a atraer más clientes, transmitir confianza y mejorar la experiencia digital de tu negocio.",

    items: [
      {
        image: "/images/benefits/visibility.png",
        title: "Mayor visibilidad",
      },
      {
        image: "/images/benefits/conversion.png",
        title: "Más conversiones",
      },
      {
        image: "/images/benefits/experience.png",
        title: "Mejor experiencia",
      },
      {
        image: "/images/benefits/growth.png",
        title: "Impulso al crecimiento",
      },
    ],
  },

  pt: {
    badge: "Benefícios",

    title: "Resultados que geram mais oportunidades.",

    description:
      "Cada elemento é projetado para ajudar você a atrair mais clientes, transmitir confiança e melhorar a experiência digital do seu negócio.",

    items: [
      {
        image: "/images/benefits/visibility.png",
        title: "Maior visibilidade",
      },
      {
        image: "/images/benefits/conversion.png",
        title: "Mais conversões",
      },
      {
        image: "/images/benefits/experience.png",
        title: "Melhor experiência",
      },
      {
        image: "/images/benefits/growth.png",
        title: "Impulso ao crescimento",
      },
    ],
  },
} as const;