"use client";

import { solutionContent } from "../content/solution.content";
import { useLanguage } from "@/hooks/use-language";
import SolutionItem from "./solution-item";

export default function SolutionList() {
  const lang = useLanguage();
  const content = solutionContent[lang];

  return (
    <div
      className="
        space-y-8
        mt-10
      "
    >
      {content.items.map((item) => (
        <SolutionItem
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}