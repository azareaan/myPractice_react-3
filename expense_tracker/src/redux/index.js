import { configureStore } from "@reduxjs/toolkit";
import { costSlice } from "./slices/costSlice";
import { incomeSlice } from "./slices/incomeSlice";
import { categorySlice } from "./slices/categorySlice";

export const store = configureStore({
    reducer: {
        cost: costSlice.reducer,
        income: incomeSlice.reducer,
        category: categorySlice.reducer
    }
});