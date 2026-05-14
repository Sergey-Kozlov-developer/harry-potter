import { createSlice } from "@reduxjs/toolkit";

interface IMenuToggleState {
    isOpen: boolean;
}

const initialState: IMenuToggleState = {
    isOpen: false,
};

const menuToggleSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        openMenu: (state) => {
            state.isOpen = true;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },
    },
});

export const { toggleMenu, openMenu, closeMenu } = menuToggleSlice.actions;
export default menuToggleSlice.reducer;
