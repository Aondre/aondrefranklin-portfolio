//// Types.ts: The shape of the data
// Achievement Object:
export interface Achievement {
  id: number;
  title: string;
  metric: string;
  delta: string;
  desc: string;
  tag: "Self-initiated" | "Co-led" | "Contributed";
  featured: boolean;
}

// Project Object:
export interface Project {
  name: string;
  desc: string;
  tags: string[];
  github: string;
  live?: string;
}

// Certification Object:
