import { createContext } from "react";

const CostContext = createContext();

const CostContextProvider = ({children}) => {
    return (
        <CostContext.Provider>
            {children}
        </CostContext.Provider>
    )
};

export default CostContextProvider;