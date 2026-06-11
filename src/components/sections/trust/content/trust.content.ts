import type { TrustContent } from "../types/trust.types";

export const trustContent = {
  en: {
    badge: "Trust",

    title: "We work with clear processes and measurable results.",

    description:
      "We focus on building solutions that generate real value for every business.",

    proofs: [
      {
        title: "Validated methodology",
        description: "Structured process from planning to delivery.",
      },
      {
        title: "Constant communication",
        description: "Transparent follow-up throughout the entire project.",
      },
      {
        title: "Professional quality",
        description: "Best practices in design, development, and performance.",
      },
    ],

    stats: [
      { value: "+150", label: "Projects delivered" },
      { value: "98%", label: "Satisfied clients" },
      { value: "24h", label: "Average response time" },
    ],

    testimonials: [
      {
        name: "Carlos Gómez",
        role: "Commercial Director",
        quote: "The project was delivered on time and exceeded our expectations.",
      },
      {
        name: "Laura Martínez",
        role: "Entrepreneur",
        quote: "The experience was clear, professional, and focused on real results.",
      },
    ],

    guarantee: {
      badge: "Quality guarantee",
      title: "Commitment to quality",
      description:
        "Every project is delivered reviewed, optimized, and ready to work from day one.",
    },
  },

  es: {
    badge: "Confianza",

    title: "Trabajamos con procesos claros y resultados medibles.",

    description:
      "Nos enfocamos en construir soluciones que generen valor real para cada negocio.",

    proofs: [
      {
        title: "Metodología validada",
        description: "Proceso estructurado desde la planificación hasta la entrega.",
      },
      {
        title: "Comunicación constante",
        description: "Seguimiento transparente durante todo el proyecto.",
      },
      {
        title: "Calidad profesional",
        description: "Buenas prácticas en diseño, desarrollo y rendimiento.",
      },
    ],

    stats: [
      { value: "+150", label: "Proyectos entregados" },
      { value: "98%", label: "Clientes satisfechos" },
      { value: "24h", label: "Tiempo promedio de respuesta" },
    ],

    testimonials: [
      {
        name: "Carlos Gómez",
        role: "Director Comercial",
        quote: "El proyecto fue entregado a tiempo y superó nuestras expectativas.",
      },
      {
        name: "Laura Martínez",
        role: "Emprendedora",
        quote: "La experiencia fue clara, profesional y enfocada en resultados reales.",
      },
    ],

    guarantee: {
      badge: "Garantía de calidad",
      title: "Compromiso con la calidad",
      description:
        "Cada proyecto se entrega revisado, optimizado y listo para funcionar desde el primer día.",
    },
  },

  pt: {
    badge: "Confiança",

    title: "Trabalhamos com processos claros e resultados mensuráveis.",

    description:
      "Focamos em construir soluções que gerem valor real para cada negócio.",

    proofs: [
      {
        title: "Metodologia validada",
        description: "Processo estruturado desde o planejamento até a entrega.",
      },
      {
        title: "Comunicação constante",
        description: "Acompanhamento transparente durante todo o projeto.",
      },
      {
        title: "Qualidade profissional",
        description: "Boas práticas em design, desenvolvimento e desempenho.",
      },
    ],

    stats: [
      { value: "+150", label: "Projetos entregues" },
      { value: "98%", label: "Clientes satisfeitos" },
      { value: "24h", label: "Tempo médio de resposta" },
    ],

    testimonials: [
      {
        name: "Carlos Gómez",
        role: "Diretor Comercial",
        quote: "O projeto foi entregue no prazo e superou nossas expectativas.",
      },
      {
        name: "Laura Martínez",
        role: "Empreendedora",
        quote: "A experiência foi clara, profissional e focada em resultados reais.",
      },
    ],

    guarantee: {
      badge: "Garantia de qualidade",
      title: "Compromisso com a qualidade",
      description:
        "Cada projeto é entregue revisado, otimizado e pronto para funcionar desde o primeiro dia.",
    },
  },
} as const satisfies Record<string, TrustContent>;