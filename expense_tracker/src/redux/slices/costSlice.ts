import { createSlice } from "@reduxjs/toolkit";

// Get the initial state from localStorage or set it to an empty array
const store = localStorage.getItem("costs");
const initialState = store ? JSON.parse(store) : [];

export const costSlice = createSlice({
    name: "cost",
    initialState,
    reducers: {
        addCost(state, action) {
            state.push(action.payload);
            localStorage.setItem("costs", JSON.stringify(state));
        },
    }
});

export const costActions = costSlice.actions;