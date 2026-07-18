import type { CharacterStat } from "State/CharacterStats/type";
import type { AvailableStats } from "State/Stats/type";

export function calculateModifier(baseValue: number): number {
  return Math.floor((baseValue - 10) / 2);
}

export function getInitiative(stats: Record<AvailableStats, CharacterStat> | undefined): number {
  return calculateModifier(stats?.DEX.value ?? 0);
}
