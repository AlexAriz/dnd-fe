import type { Stats } from "Constants/stats";

export type AvailableStats = (typeof Stats)[keyof typeof Stats];

export interface StatSummary {
  id: AvailableStats;
  name: string;
}

export interface StatDetails {
  value: number;
  proficiency: boolean;
  expertise: boolean;
}
