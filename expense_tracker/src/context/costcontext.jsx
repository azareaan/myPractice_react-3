import { createContext, useEffect, useReducer } from "react";

export const CostContext = createContext();

export const ADD = "ADD";

const costReducer = (state = [], action) => {
    if(action.type === ADD){
        const newState = [...state, action.payload];
        localStorage.setItem("costs", JSON.stringify(newState));
        return newState;
    }
    return state;
};

const CostContextProvider = ({children}) => {
    const [costs, dispatch] = useReducer(
        costReducer, 
        JSON.parse(localStorage.getItem("costs")) || []
    );

    useEffect(() => {
        localStorage.setItem("costs", JSON.stringify(costs));
    }, []);
    
    return (
        <CostContext.Provider value={{ costs, dispatch }}>
            {children}
        </CostContext.Provider>
    )
};

export default CostContextProvider;