export interface BenefitItem {
  image: string;

  title: string;
}

export interface BenefitsContent {
  badge: string;

  title: string;

  description: string;

  items: BenefitItem[];
}