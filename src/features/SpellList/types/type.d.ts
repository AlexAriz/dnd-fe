import type { Columns, Order } from "../constants/sorting";

export type SortableColumns = (typeof Columns)[keyof typeof Columns];
export type SortOrder = (typeof Order)[keyof typeof Order];
