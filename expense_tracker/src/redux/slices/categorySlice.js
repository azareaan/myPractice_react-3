import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: JSON.parse(localStorage.getItem("categories")) || [],
    reducers: {
        addCategory(state, action) {
            state.push(action.payload);
            localStorage.setItem("categories", JSON.stringify(state));
        },
    }
});

export const categoryActions = categorySlice.actions;