import type {
  HTMLAttributes,
} from "react";

export type CardVariant =
  | "default"
  | "subtle"
  | "outlined"
  | "secondary"
  | "elevated"
  | "floating"
  | "glass"
  | "gradient"
  | "accent";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}