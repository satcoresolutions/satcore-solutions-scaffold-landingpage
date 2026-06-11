"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/card";
import SolutionContent from "./solution-content";
import SolutionList from "./solution-list";

export default function SolutionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Card
        variant="accent"
        className="
          p-8
          md:p-10
        "
      >
        <SolutionContent />
        <SolutionList />
      </Card>
    </motion.div>
  );
}