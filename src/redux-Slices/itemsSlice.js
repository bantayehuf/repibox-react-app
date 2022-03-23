import {
    createSlice
} from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        page: "",
        has_next_page: false,
        searchingItem: {
            searching: false,
            query: ''
        },
        posts: [],
        error: {
            hasError: false,
            errorMessage: ""
        }
    },
    reducers: {
        requestResultHandler: (state, action) => {
            state.page = action.payload.page;
            state.has_next_page = action.payload.has_next_page;
            state.searchingItem = action.payload.searchingItem;
            state.posts = action.payload.posts;
            state.error = action.payload.error;
        }
    }
});

export const {
    requestResultHandler
} = itemsSlice.actions;

export default itemsSlice.reducer;