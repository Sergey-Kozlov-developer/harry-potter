import type { ICharacter } from "@entities/character/model/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IPaginationState {
    allCharacters: ICharacter[];
    currentPage: number;
    itemsPerPage: number;
}

const initialState: IPaginationState = {
    allCharacters: [],
    currentPage: 1,
    itemsPerPage: 20,
};

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        setAllCharacters: (state, action: PayloadAction<ICharacter[]>) => {
            state.allCharacters = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setItemsPerPage: (state, action: PayloadAction<number>) => {
            state.itemsPerPage = action.payload;
            state.currentPage = 1;
        },
        nextPage: (state) => {
            const totalPages = Math.ceil(
                state.allCharacters.length / state.itemsPerPage
            );
            if (state.currentPage < totalPages) {
                state.currentPage += 1;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        goToPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});
export const {
    setAllCharacters,
    setCurrentPage,
    setItemsPerPage,
    nextPage,
    prevPage,
    goToPage,
} = characterSlice.actions;

export default characterSlice.reducer;
