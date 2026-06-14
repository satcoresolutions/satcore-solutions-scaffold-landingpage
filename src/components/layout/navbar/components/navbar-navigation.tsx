"use client";

import Link from "next/link";
import { navigationConfig } from "@/config/navigation.config";
import { navigationContent } from "@/i18n/navigation.content";
import { useLanguage } from "@/hooks/use-language";
import { Events } from "@/integrations/google/analytics";

export default function NavbarNavigation() {
  const lang = useLanguage();
  const t = navigationContent[lang];

  return (
    <nav className="p-2 hidden items-center gap-6 md:flex">
      {navigationConfig.main.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => Events.navClick(link.key)}
          className=" text-sm transition-opacity hover:opacity-70"
        >
          {t[link.key]}
        </Link>
      ))}
    </nav>
  );
}