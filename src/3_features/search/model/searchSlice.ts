import { createSlice } from "@reduxjs/toolkit";

export interface ISearchState {
    query: string;
}

const initialState: ISearchState = {
    query: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.query = action.payload;
        },
    },
});
export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
