import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { CharacterDetail, CharacterSummary, CreateCharacterPayload } from "./type";

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
  }),
});

export default characterApi;
export const { useGetCharactersQuery, useGetCharacterQuery, useCreateCharacterMutation } = characterApi;
