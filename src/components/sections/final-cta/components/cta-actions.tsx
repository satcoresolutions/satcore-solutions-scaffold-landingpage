"use client";

import Button from "@/components/ui/button";
import { ctaContent } from "../content/cta.content";
import { Events } from "@/integrations/google/analytics";
import { useLanguage } from "@/hooks/use-language";

export default function CTAActions() {
  const lang = useLanguage();
  const content = ctaContent[lang];

  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        justify-center
        gap-4
      "
    >
      <Button
        href={content.primaryAction.href}
        variant="gradient"
        onClick={() => Events.ctaClick(content.primaryAction.label)}
      >
        {content.primaryAction.label}
      </Button>

      {content.secondaryAction && (
        <Button
          href={content.secondaryAction.href}
          variant="subtle"
          onClick={() => Events.ctaClick(content.secondaryAction!.label)}
        >
          {content.secondaryAction.label}
        </Button>
      )}
    </div>
  );
}