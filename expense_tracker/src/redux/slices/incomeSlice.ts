import { createSlice } from "@reduxjs/toolkit";

// Get the initial state from localStorage or set it to an empty array
const store = localStorage.getItem("incomes");
const initialState = store ? JSON.parse(store) : [];

export const incomeSlice = createSlice({
    name: "income",
    initialState,
    reducers: {
        addIncome(state, action) {
            state.push(action.payload);
            localStorage.setItem("incomes", JSON.stringify(state));
        },
    }
});

export const incomeActions = incomeSlice.actions;