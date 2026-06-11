export interface CharacterSummary {
  id: string;
  name: string;
  classes: {
    id: string;
    name: string;
    level: number;
    isStartingClass: boolean;
  }[];
}

export interface CharacterDetail {
  id: string;
  name: string;
  classes: {
    id: string;
    name: string;
    level: number;
    isStartingClass: boolean;
  }[];
}
