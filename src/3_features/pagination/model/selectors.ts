import type { RootState } from "@app/store/store";

export const selectAllCharacters = (state: RootState) =>
    state.pagination.allCharacters;
export const selectCurrentPage = (state: RootState) =>
    state.pagination.currentPage;
export const selectItemsPerPage = (state: RootState) =>
    state.pagination.itemsPerPage;

export const selectCurrentCharacters = (state: RootState) => {
    const allCharacters = selectAllCharacters(state);
    const currentPage = selectCurrentPage(state);
    const itemsPerPage = selectItemsPerPage(state);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return allCharacters.slice(startIndex, endIndex);
};

export const selectTotalPages = (state: RootState) => {
    const allCharacters = selectAllCharacters(state);
    const itemsPerPage = selectItemsPerPage(state);
    return Math.ceil(allCharacters.length / itemsPerPage);
};
