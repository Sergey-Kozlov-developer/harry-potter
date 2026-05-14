import type { RootState } from "@app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllCharacters = (state: RootState) =>
    state.pagination.allCharacters;
export const selectCurrentPage = (state: RootState) =>
    state.pagination.currentPage;
export const selectItemsPerPage = (state: RootState) =>
    state.pagination.itemsPerPage;

export const selectCurrentCharacters = createSelector(
    [selectAllCharacters, selectCurrentPage, selectItemsPerPage],
    (allCharacters, currentPage, itemsPerPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return allCharacters.slice(startIndex, endIndex);
    }
);

export const selectTotalPages = createSelector(
    [selectAllCharacters, selectItemsPerPage],
    (allCharacters, itemsPerPage) => {
        return Math.ceil(allCharacters.length / itemsPerPage);
    }
);
