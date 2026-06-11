export interface SolutionItem {
  title: string;

  description: string;
}

export interface SolutionContent {
  eyebrow: string;

  heading: string;

  summary: string;

  items: SolutionItem[];
}