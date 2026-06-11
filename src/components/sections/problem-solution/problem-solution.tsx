import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import Problem
  from "./problem/problem";

import Solution
  from "./solution/solution";

export default function ProblemSolution() {
  return (
    <Section
      id="solution"
      variant="glass"
      spacing="xl"
      className="py-10"
    >
      <Container>
        <div
          className="
            flex
            flex-col
            gap-16

            lg:flex-row
          "
        >
          <div
            className="
              w-full
              lg:w-1/2
            "
          >
            <Problem />
          </div>

          <div
            className="
              w-full
              lg:w-1/2
            "
          >
            <Solution />
          </div>
        </div>
      </Container>
    </Section>
  );
}