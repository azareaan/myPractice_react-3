import { createContext, useEffect, useReducer } from "react";

export const CategoryContext = createContext();

export const ADD = "ADD";

const categoryReducer = (state = [], action) => {
    if(action.type === ADD){
        const newState = [...state, action.payload];
        localStorage.setItem("categories", JSON.stringify(newState));
        return newState;
    }
    return state;
};

const CategoryContextProvider = ({children}) => {
    const [categories, dispatch] = useReducer(
        categoryReducer, 
        JSON.parse(localStorage.getItem("categories")) || []
    );

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories));
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, dispatch }}>
            {children}
        </CategoryContext.Provider>
    )
};

export default CategoryContextProvider;