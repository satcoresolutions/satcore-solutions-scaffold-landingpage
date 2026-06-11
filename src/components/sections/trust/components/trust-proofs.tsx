"use client";

import { trustContent } from "../content/trust.content";
import { useLanguage } from "@/hooks/use-language";
import TrustProof from "./trust-proof";

export default function TrustProofs() {
  const lang = useLanguage();
  const content = trustContent[lang];

  return (
    <div
      className="
        mt-16
        grid
        gap-6

        md:grid-cols-3
      "
    >
      {content.proofs.map((proof) => (
        <TrustProof
          key={proof.title}
          title={proof.title}
          description={proof.description}
        />
      ))}
    </div>
  );
}