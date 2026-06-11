import Navbar
  from "@/components/layout/navbar";

import Hero
  from "@/components/sections/hero";

import ProblemSolution
  from "@/components/sections/problem-solution/problem-solution";

import Benefits
  from "@/components/sections/benefits";

import Functionality
  from "@/components/sections/functionality";

import Trust
  from "@/components/sections/trust";

import Process
  from "@/components/sections/process";

import CTA
  from "@/components/sections/final-cta";

import Footer
  from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ProblemSolution />

        <Benefits />

        <Functionality />

        <Trust />

        <Process />

        <CTA />
      </main>

      <Footer />
    </>
  );
}