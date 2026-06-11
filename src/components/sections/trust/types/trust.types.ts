export interface TrustProof {
  title: string;

  description: string;
}

export interface TrustStat {
  value: string;

  label: string;
}

export interface Testimonial {
  name: string;

  role: string;

  quote: string;
}

export interface TrustGuarantee {
  title: string;

  description: string;

  badge: string;
}

export interface TrustContent {
  badge: string;

  title: string;

  description: string;

  proofs: TrustProof[];

  stats?: TrustStat[];

  testimonials?: Testimonial[];

  guarantee?: TrustGuarantee;
}