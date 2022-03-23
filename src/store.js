import {
    configureStore
} from "@reduxjs/toolkit";

import itemsReducer from './redux-Slices/itemsSlice';

export const store = configureStore({
    reducer: itemsReducer,
})