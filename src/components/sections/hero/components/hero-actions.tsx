"use client";

import Button from "@/components/ui/button";
import { Events } from "@/analytics/events";

interface HeroActionsProps {
  primary: {
    label: string;
    href: string;
  };

  secondary: {
    label: string;
    href: string;
  };
}

export default function HeroActions({
  primary,
  secondary,
}: HeroActionsProps) {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        gap-4
      "
    >
      <Button
        href={primary.href}
        variant="gradient"
        onClick={() =>
          Events.ctaClick(
            "hero_primary"
          )
        }
      >
        {primary.label}
      </Button>

      <Button
        href={secondary.href}
        variant="glass"
        onClick={() =>
          Events.ctaClick(
            "hero_secondary"
          )
        }
      >
        {secondary.label}
      </Button>
    </div>
  );
}