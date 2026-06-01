import type { RootState } from "@app/store/store";

export const searchCharacters = (state: RootState) => state.search.query;
