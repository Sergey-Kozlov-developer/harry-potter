import { setAllCharacters } from "@features/pagination/model/paginationSlice";
import type {
    ICharacter,
    TCharacterByHouseResponse,
    TCharacterResponse,
} from "@entities/character/model/types";
import { baseApi } from "@shared/api/baseApi";

export const characterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCharacters: build.query<TCharacterResponse, void>({
            query: () => "/characters",
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setAllCharacters(data));
            },
        }),
        getCharacterById: build.query<ICharacter, string>({
            query: (id) => `/characters/${id}`,
        }),
        getCharactersByHouse: build.query<TCharacterByHouseResponse, string>({
            query: (house) => `/characters/house/${house}`,
        }),
    }),
});

export const {
    useGetCharactersQuery,
    useGetCharacterByIdQuery,
    useGetCharactersByHouseQuery,
} = characterApi;
