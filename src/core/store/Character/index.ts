import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type {
  CharacterDetail,
  CharacterDetailResponse,
  CharacterSummary,
  CreateCharacterPayload,
  PatchCharacterPayload,
} from "./type";
import { calculateModifier } from "Rules/stats";

const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["Character"],
  endpoints: (build) => ({
    getCharacters: build.query<CharacterSummary[], void>({
      query: () => "characters",
      providesTags: (characters) =>
        characters ?
          [...characters.map(({ id }) => ({ type: "Character" as const, id })), { type: "Character", id: "LIST" }]
        : [{ type: "Character", id: "LIST" }],
    }),
    getCharacter: build.query<CharacterDetail, string>({
      query: (characterId) => `characters/${characterId}`,
      transformResponse: (apiCharacter: CharacterDetailResponse) => {
        const stats: CharacterDetailResponse["stats"] = {
          ...apiCharacter.stats,
        };
        apiCharacter.statBonuses.forEach((statBonus) => {
          const baseStat = stats[statBonus.statId];
          stats[statBonus.statId] = {
            ...baseStat,
            value: baseStat.value + statBonus.bonus,
          };
        });

        const maxHitpoints: number =
          apiCharacter.hitPoints.base + (apiCharacter.hitPoints.bonus ?? 0) + (apiCharacter.hitPoints.temporary ?? 0);
        const currentHitpoints = maxHitpoints - (apiCharacter.hitPoints.removed ?? 0);

        const overallLevel: number = apiCharacter.classes.reduce(
          (acc, characterClass) => acc + characterClass.level,
          0,
        );

        return {
          id: apiCharacter.id,
          name: apiCharacter.name,
          classes: apiCharacter.classes,
          speeds: apiCharacter.speeds,
          armorClass: apiCharacter.armorClass,
          inspiration: apiCharacter.inspiration,
          skills: apiCharacter.skills,
          stats,
          hitPoints: {
            current: currentHitpoints,
            max: maxHitpoints,
          },
          proficiencyBonus: 1 + Math.ceil(overallLevel / 4),
          initiative: calculateModifier(stats.DEX.value),
        };
      },
      providesTags: (_result, _error, id) => [{ type: "Character", id }],
    }),
    createCharacter: build.mutation<CharacterSummary, CreateCharacterPayload>({
      query: (characterPayload) => ({
        url: "characters",
        method: "POST",
        body: characterPayload,
      }),
      invalidatesTags: [{ type: "Character", id: "LIST" }],
    }),
    patchCharacter: build.mutation<CharacterDetail, PatchCharacterPayload>({
      query: ({ characterId, ...patchCharacterPayload }) => ({
        url: `characters/${characterId}`,
        method: "PATCH",
        body: patchCharacterPayload,
      }),
      invalidatesTags: (_result, _error, { characterId }) => [{ type: "Character", id: characterId }],
    }),
  }),
});

export default characterApi;
export const { useGetCharactersQuery, useGetCharacterQuery, useCreateCharacterMutation, usePatchCharacterMutation } =
  characterApi;
export const useGetCharacterState = characterApi.endpoints.getCharacter.useQueryState;
