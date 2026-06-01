import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import paginationReducer from "@features/pagination/model/paginationSlice";
import menuToggleReducer from "@features/menu-toggle/model/menuToggleSlice";
import searchReducer from "@features/search/model/searchSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        pagination: paginationReducer,
        menuToggle: menuToggleReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
