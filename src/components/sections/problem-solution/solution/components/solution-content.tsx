"use client";

import { solutionContent } from "../content/solution.content";
import { useLanguage } from "@/hooks/use-language";

export default function SolutionContent() {
  const lang = useLanguage();
  const content = solutionContent[lang];

  return (
    <div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      <p
        className="
          uppercase
        "
        style={{
          color: "var(--color-primary)",
        }}
      >
        {content.eyebrow}
      </p>

      <h2
        className="
          mt-4
        "
      >
        {content.heading}
      </h2>

      <p
        className="
          mt-6
        "
      >
        {content.summary}
      </p>
    </div>
  );
}