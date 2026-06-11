"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/card";

interface TrustProofProps {
  title: string;
  description: string;
}

export default function TrustProof({
  title,
  description,
}: TrustProofProps) {
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
        variant="gradient"
        className="p-6"
      >
        <h3>{title}</h3>

        <p className="mt-3">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}