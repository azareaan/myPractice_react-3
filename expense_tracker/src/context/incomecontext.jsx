import { createContext } from "react";

const IncomeContext = createContext();

const IncomeContextProvider = ({children}) => {
    return (
        <IncomeContext.Provider>
            {children}
        </IncomeContext.Provider>
    )
};

export default IncomeContextProvider;