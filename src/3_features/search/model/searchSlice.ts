import { createSlice } from "@reduxjs/toolkit";

export interface ISearchState {
    query: string;
    house: string;
}

const initialState: ISearchState = {
    query: "",
    house: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.query = action.payload;
        },
        setHouse: (state, action) => {
            state.house = action.payload as
                | "griffindor"
                | "slytherin"
                | "hufflepuff"
                | "ravenclaw";
        },
    },
});
export const { setSearch, setHouse } = searchSlice.actions;
export default searchSlice.reducer;
