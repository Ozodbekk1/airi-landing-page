/** @format */

export interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "National AI Analytics Platform",
    description:
      "A centralized AI-driven analytics platform supporting government decision-making processes.",
    tag: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Digital Government Infrastructure",
    description:
      "Development of scalable digital platforms for public services and inter-agency integration.",
    tag: "Digital Transformation",
  },
  {
    id: 3,
    title: "Cybersecurity Research Lab",
    description:
      "Advanced research and implementation of cybersecurity solutions for national systems.",
    tag: "Security",
  },
];
