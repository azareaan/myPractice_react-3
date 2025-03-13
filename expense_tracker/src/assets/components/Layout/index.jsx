import React from "react";
import styles from "./layout.module.scss"
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main>
            <div className={styles.layout}>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>َAdd costs</li>
                        </Link>

                        <Link to="/">
                            <li>Add income</li>
                        </Link>
                        
                        <Link to="/">
                            <li>Add category</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </main>
    )
};

export default Layout;