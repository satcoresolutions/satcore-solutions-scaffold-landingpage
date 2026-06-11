"use client";

import HeroBadge from "./hero-badge";
import HeroActions from "./hero-actions";
import { heroContent } from "../content/hero.content";
import { ctaContent } from "@/i18n/cta.content";
import { useLanguage } from "@/hooks/use-language";

export default function HeroContent() {
  const lang = useLanguage();
  const content = heroContent[lang];
  const cta = ctaContent[lang].hero;

  return (
    <div className="flex flex-col">
      <HeroBadge label={content.badge} />

      <h1 className="mt-6 max-w-2xl text-balance">
        {content.title}
      </h1>

      <p className="pt-5 max-w-xl text-balance" style={{ color: "var(--accent)" }}>
        {content.description}
      </p>

      <HeroActions
        primary={{ label: cta.primaryAction.label, href: "#contact" }}
        secondary={{ label: cta.secondaryAction.label, href: "#process" }}
      />
    </div>
  );
}