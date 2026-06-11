"use client";

import { useLanguage } from "@/hooks/use-language";
import { benefitsContent } from "../content/benefits.content";

import BenefitCard from "./benefit-card";

export default function BenefitsGrid() {
  const lang = useLanguage();
  const content = benefitsContent[lang];

  return (
    <div
      className="
        mt-16
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {content.items.map((item) => (
        <BenefitCard
          key={item.title}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}