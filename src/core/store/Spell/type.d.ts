export interface SpellSummary {
  id: string;
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  concentration: boolean;
  ritual: boolean;
  magicSchool: {
    name: string;
  };
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
  magicSchool: {
    name: string;
  };
  classes: {
    id: string;
    name: string;
  }[];
  subClasses: {
    id: string;
    name: string;
    shortName: string;
    class: {
      id: string;
      name: string;
    };
  }[];
}
