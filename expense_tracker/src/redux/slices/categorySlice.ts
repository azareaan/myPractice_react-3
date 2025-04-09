import { createSlice } from "@reduxjs/toolkit";

// Get the initial state from localStorage or set it to an empty array
const store = localStorage.getItem("costs");
const initialState = store ? JSON.parse(store) : [];

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory(state, action) {
            state.push(action.payload);
            localStorage.setItem("categories", JSON.stringify(state));
        },
    }
});

export const categoryActions = categorySlice.actions;