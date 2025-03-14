import { createContext, useEffect, useReducer } from "react";

export const IncomeContext = createContext();

export const ADD = "ADD";

const incomeReducer = (state = [], action) => {
    if(action.type === ADD){
        const newState = [...state, action.payload];
        localStorage.setItem("incomes", JSON.stringify(newState));
        return newState;
    }
    return state;
};

const IncomeContextProvider = ({children}) => {
    const [incomes, dispatch] = useReducer(
        incomeReducer, 
        JSON.parse(localStorage.getItem("incomes")) || []
    );

    useEffect(() => {
        localStorage.setItem("incomes", JSON.stringify(incomes));
    }, []);

    return (
        <IncomeContext.Provider value={{ incomes, dispatch }}>
            {children}
        </IncomeContext.Provider>
    )
};

export default IncomeContextProvider;