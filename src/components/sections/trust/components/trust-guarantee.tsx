"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import { trustContent } from "../content/trust.content";
import { useLanguage } from "@/hooks/use-language";

export default function TrustGuarantee() {
  const lang = useLanguage();
  const content = trustContent[lang];

  if (!content.guarantee) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <Card
        variant="outlined"
        className="mt-16 p-8 md:p-12"
      >
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
            "
            style={{
              background: "var(--background-secondary)",
              color: "var(--color-primary)",
            }}
          >
            {content.guarantee.badge}
          </div>

          <h3 className="mt-6">
            {content.guarantee.title}
          </h3>

          <p
            className="mt-4 text-balance"
            style={{ color: "var(--text-secondary)" }}
          >
            {content.guarantee.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}