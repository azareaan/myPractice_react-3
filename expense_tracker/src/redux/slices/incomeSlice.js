import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
    name: "income",
    initialState: JSON.parse(localStorage.getItem("incomes")) || [],
    reducers: {
        addIncome(state, action) {
            state.push(action.payload);
            localStorage.setItem("incomes", JSON.stringify(state));
        },
    }
});

export const incomeActions = incomeSlice.actions;