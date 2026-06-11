import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import TrustContent
  from "./components/trust-content";

import TrustProofs
  from "./components/trust-proofs";

import TrustStats
  from "./components/trust-stats";

import TrustTestimonials
  from "./components/trust-testimonials";

import TrustGuarantee
  from "./components/trust-guarantee";

export default function Trust() {
  return (
    <Section
      id="trust"
      variant="glass"
      spacing="xl"
      className="py-10"
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-6xl
            text-center
          "
        >
          <TrustContent />

          <TrustProofs />

          <TrustStats />

          <TrustTestimonials />

          <TrustGuarantee />
        </div>
      </Container>
    </Section>
  );
}