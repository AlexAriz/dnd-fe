export interface SpellSummary {
  id: string;
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  concentration: boolean;
  ritual: boolean;
}

export interface SpellDetail {
  id: string;
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  concentration: boolean;
  ritual: boolean;
  markdown: string;
}
