import { createContext } from "react";

const CategoryContext = createContext();

const CategoryContextProvider = ({children}) => {
    return (
        <CategoryContext.Provider>
            {children}
        </CategoryContext.Provider>
    )
};

export default CategoryContextProvider;