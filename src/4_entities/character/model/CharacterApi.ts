import type {
    ICharacter,
    TCharacterResponse,
} from "@entities/character/model/types";
import { baseApi } from "@shared/api/baseApi";

export const characterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCharacters: build.query<TCharacterResponse, void>({
            query: () => "/characters",
        }),
        getCharacterById: build.query<ICharacter, string>({
            query: (id) => `/characters/${id}`,
        }),
    }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = characterApi;
