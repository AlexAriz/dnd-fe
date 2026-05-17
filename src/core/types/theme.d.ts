import type { JSX } from "react";

export type Mode = "light" | "dark" | "system";

export interface Theme {
  value: Mode;
  Icon: JSX;
}
