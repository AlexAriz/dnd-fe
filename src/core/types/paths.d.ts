import type Routes from "Constants/routes";

export interface PathMap {
  id: string;
  currentPath: (typeof Routes)[keyof typeof Routes];
}
