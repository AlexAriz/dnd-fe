import type { JSX } from "react";

export type Mode = "light" | "dark" | "system";

export interface Theme {
  NAME: string;
  VALUE: Mode;
  Icon: JSX;
}
