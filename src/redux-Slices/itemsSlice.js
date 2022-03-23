import {
    createSlice
} from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        page: "",
        has_next_page: false,
        posts: [],
    },
    reducers: {
        loadedItemHandler: (state, action) => {
            state.page = action.payload.page;
            state.has_next_page = action.payload.has_next_page;
            state.posts = action.payload.posts;
        }
    }
});

export const {
    loadedItemHandler
} = itemsSlice.actions;

export default itemsSlice.reducer;