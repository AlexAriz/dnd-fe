export enum AvailableStats {
  STR = "STR",
  DEX = "DEX",
  CON = "CON",
  INT = "INT",
  WIS = "WIS",
  CHA = "CHA",
}

export interface StatSummary {
  id: AvailableStats;
  name: string;
}

export interface StatDetails {
  value: number;
  proficiency: boolean;
  expertise: boolean;
}
