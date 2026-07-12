import type { CharacterSkill } from "State/CharacterSkills/type";
import type { CharacterStat } from "State/CharacterStats/type";
import type { AvailableStats } from "State/Stats/type";

export function calculateModifier(baseValue: number): number {
  return Math.floor((baseValue - 10) / 2);
}

export function getInitiative(stats: Record<AvailableStats, CharacterStat> | undefined): number {
  return calculateModifier(stats?.DEX.value ?? 0);
}

export function getAbilityCheck(stat: CharacterStat): number {
  return calculateModifier(stat.value);
}

export function getAbilitySave(stat: CharacterStat, proficiencyBonus: number): number {
  const bonus = stat.proficiency ? proficiencyBonus : 0;
  return calculateModifier(stat.value) + bonus;
}

export function getSkillCheck(skill: CharacterSkill, proficiencyBonus: number): number {
  const bonus =
    skill.expertise ? proficiencyBonus * 2
    : skill.proficiency ? proficiencyBonus
    : 0;

  return calculateModifier(skill.statValue) + bonus;
}
