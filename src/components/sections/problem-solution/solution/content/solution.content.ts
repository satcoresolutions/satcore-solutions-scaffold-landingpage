import type { SolutionContent } from "../types/solution.types";

export const solutionContent = {
  en: {
    eyebrow: "The solution",

    heading:
      "A digital system designed to turn interest into real opportunities.",

    summary:
      "We create results-focused experiences, combining design, speed, and strategy to help you attract more clients without the hassle.",

    items: [
      {
        title: "More efficient lead capture",
        description:
          "We guide each visitor toward a concrete action through a structure built for conversion.",
      },
      {
        title: "Optimized experience",
        description:
          "Fast, accessible sites adapted to any device to deliver a consistent experience.",
      },
      {
        title: "Frictionless implementation",
        description:
          "We deliver a ready-to-use solution from day one, with no complex processes or unnecessary dependencies.",
      },
    ],
  },

  es: {
    eyebrow: "La solución",

    heading:
      "Un sistema digital diseñado para convertir interés en oportunidades reales.",

    summary:
      "Creamos experiencias enfocadas en resultados, combinando diseño, velocidad y estrategia para ayudarte a captar más clientes sin complicaciones.",

    items: [
      {
        title: "Captación más eficiente",
        description:
          "Guiamos a cada visitante hacia una acción concreta mediante una estructura pensada para la conversión.",
      },
      {
        title: "Experiencia optimizada",
        description:
          "Sitios rápidos, accesibles y adaptados a cualquier dispositivo para ofrecer una experiencia consistente.",
      },
      {
        title: "Implementación sin fricción",
        description:
          "Entregamos una solución lista para funcionar desde el primer día, sin procesos complejos ni dependencias innecesarias.",
      },
    ],
  },

  pt: {
    eyebrow: "A solução",

    heading:
      "Um sistema digital projetado para transformar interesse em oportunidades reais.",

    summary:
      "Criamos experiências focadas em resultados, combinando design, velocidade e estratégia para ajudá-lo a atrair mais clientes sem complicações.",

    items: [
      {
        title: "Captação mais eficiente",
        description:
          "Guiamos cada visitante em direção a uma ação concreta por meio de uma estrutura pensada para a conversão.",
      },
      {
        title: "Experiência otimizada",
        description:
          "Sites rápidos, acessíveis e adaptados a qualquer dispositivo para oferecer uma experiência consistente.",
      },
      {
        title: "Implementação sem fricção",
        description:
          "Entregamos uma solução pronta para uso desde o primeiro dia, sem processos complexos ou dependências desnecessárias.",
      },
    ],
  },
} as const satisfies Record<string, SolutionContent>;