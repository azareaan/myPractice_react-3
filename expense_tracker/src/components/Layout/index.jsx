import React from "react";
import styles from "./layout.module.scss"
import { Link, Outlet } from "react-router-dom";
import CategoryContextProvider from "../../context/categorycontext"
import IncomeContextProvider from "../../context/IncomeContext";
import CostContextProvider from "../../context/costcontext";

const Layout = () => {
    return (
        <main>
            <div className={styles.layout}>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>َHome</li>
                        </Link>

                        <Link to="/costform">
                            <li>َAdd costs</li>
                        </Link>

                        <Link to="/incomeform">
                            <li>Add income</li>
                        </Link>
                        
                        <Link to="/addcategory">
                            <li>Add category</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <CategoryContextProvider>
                <IncomeContextProvider>
                    <CostContextProvider>
                        <Outlet />
                    </CostContextProvider>
                </IncomeContextProvider>
            </CategoryContextProvider>
        </main>
    )
};

export default Layout;