"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import { trustContent } from "../content/trust.content";
import { useLanguage } from "@/hooks/use-language";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: 60,
    rotateY: -15,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TrustTestimonials() {
  const lang = useLanguage();
  const content = trustContent[lang];

  if (!content.testimonials?.length) {
    return null;
  }

  return (
    <motion.div
      className="
        mt-16
        grid
        gap-6
        md:grid-cols-2
        perspective-1000
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      style={{
        perspective: 1000,
      }}
    >
      {content.testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.name}
          whileHover={{
            rotateY: 5,
            rotateX: -2,
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Card
            variant="floating"
            className="
              p-6
              h-full
              transition-shadow
            "
          >
            <p className="text-text-primary">
              "{testimonial.quote}"
            </p>

            <div className="mt-6">
              <strong>{testimonial.name}</strong>

              <p className="mt-1 text-sm text-text-secondary">
                {testimonial.role}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}