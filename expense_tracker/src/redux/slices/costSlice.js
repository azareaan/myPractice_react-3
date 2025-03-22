import { createSlice } from "@reduxjs/toolkit";

export const costSlice = createSlice({
    name: "cost",
    initialState: JSON.parse(localStorage.getItem("costs")) || [],
    reducers: {
        addCost(state, action) {
            state.push(action.payload);
            localStorage.setItem("costs", JSON.stringify(state));
        },
    }
});

export const costActions = costSlice.actions;