"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/card";
import BenefitImage from "./benefit-image";

interface BenefitCardProps {
  title: string;
  image: string;
}

export default function BenefitCard({
  title,
  image,
}: BenefitCardProps) {
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
        className="overflow-hidden"
      >
        <BenefitImage src={image} alt={title} />

        <div className="p-5">
          <h3 className="text-base font-semibold text-text-primary">
            {title}
          </h3>
        </div>
      </Card>
    </motion.div>
  );
}