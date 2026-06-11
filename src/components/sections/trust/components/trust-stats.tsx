"use client";

import { trustContent } from "../content/trust.content";
import { useLanguage } from "@/hooks/use-language";

export default function TrustStats() {
  const lang = useLanguage();
  const content = trustContent[lang];

  if (!content.stats?.length) {
    return null;
  }

  return (
    <div
      className="
        mt-16
        grid
        gap-8

        sm:grid-cols-3
      "
    >
      {content.stats.map((stat) => (
        <div key={stat.label}>
          <div
            className="
              text-4xl
              font-bold
            "
            style={{
              color: "var(--color-primary)",
            }}
          >
            {stat.value}
          </div>

          <p className="mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}