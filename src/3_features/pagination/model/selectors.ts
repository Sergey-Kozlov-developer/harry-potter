import type { RootState } from "@app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllCharacters = (state: RootState) =>
    state.pagination.allCharacters;
export const selectCurrentPage = (state: RootState) =>
    state.pagination.currentPage;
export const selectItemsPerPage = (state: RootState) =>
    state.pagination.itemsPerPage;

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectHouseFilter = (state: RootState) => state.search.house;

export const selectFilteredCharacters = createSelector(
    [selectAllCharacters, selectSearchQuery, selectHouseFilter],
    (allCharacters, searchQuery, houseFilter) => {
        let filtered = [...allCharacters];

        // Фильтрация по поиску
        if (searchQuery) {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Фильтрация по дому
        if (houseFilter) {
            filtered = filtered.filter((item) => {
                const characterHouse = item.house?.toLowerCase() || "";
                return characterHouse === houseFilter.toLowerCase();
            });
        }

        return filtered;
    }
);

// Селектор для пагинированных и отфильтрованных персонажей (текущая страница)
export const selectCurrentCharacters = createSelector(
    [selectFilteredCharacters, selectCurrentPage, selectItemsPerPage],
    (filteredCharacters, currentPage, itemsPerPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredCharacters.slice(startIndex, endIndex);
    }
);

// Селектор для общего количества страниц (на основе отфильтрованных данных)
export const selectTotalPages = createSelector(
    [selectFilteredCharacters, selectItemsPerPage],
    (filteredCharacters, itemsPerPage) => {
        return Math.ceil(filteredCharacters.length / itemsPerPage);
    }
);

// Селектор для общего количества отфильтрованных персонажей
export const selectFilteredCount = createSelector(
    [selectFilteredCharacters],
    (filteredCharacters) => filteredCharacters.length
);
