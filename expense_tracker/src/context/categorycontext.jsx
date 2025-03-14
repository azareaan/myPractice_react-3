import { createContext } from "react";

export const CategoryContext = createContext();

const CategoryContextProvider = ({children}) => {
    return (
        <CategoryContext.Provider>
            {children}
        </CategoryContext.Provider>
    )
};

export default CategoryContextProvider;