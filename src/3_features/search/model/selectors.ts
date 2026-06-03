import type { RootState } from "@app/store/store";

export const searchCharacters = (state: RootState) => state.search.query;
export const selectHouse = (state: RootState) => state.search.house;
