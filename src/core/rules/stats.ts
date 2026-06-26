import type { CharacterDetail } from "State/Character/type";
import type { SkillSummary } from "State/Skills/type";
import type { AvailableStats } from "State/Stats/type";

export function calculateModifier(baseValue: number): number {
  return Math.floor((baseValue - 10) / 2);
}

export function getAbilityCheck(character: CharacterDetail, statId: AvailableStats): number {
  return calculateModifier(character.stats[statId].value);
}

export function getAbilitySave(character: CharacterDetail, statId: AvailableStats): number {
  const bonus = character.stats[statId].proficiency ? character.proficiencyBonus : 0;
  return calculateModifier(character.stats[statId].value) + bonus;
}

export function getSkillCheck(character: CharacterDetail, skill: SkillSummary): number {
  const bonus =
    character.skills[skill.name].expertise ? character.proficiencyBonus * 2
    : character.skills[skill.name].proficiency ? character.proficiencyBonus
    : 0;
  return calculateModifier(character.stats[skill.statId].value) + bonus;
}
