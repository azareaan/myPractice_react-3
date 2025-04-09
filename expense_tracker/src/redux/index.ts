import { configureStore } from "@reduxjs/toolkit";
import { costSlice } from "./slices/costSlice.ts";
import { incomeSlice } from "./slices/incomeSlice.ts";
import { categorySlice } from "./slices/categorySlice.ts";

export const store = configureStore({
    reducer: {
        cost: costSlice.reducer,
        income: incomeSlice.reducer,
        category: categorySlice.reducer
    }
});