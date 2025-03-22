import React from "react";
import styles from "./transactionlist.module.scss";
import List from "../../components/List";
import { useSelector } from "react-redux";

const TransactionList = () => {
    const { costs, incomes } = useSelector(state => {
        return {
            costs: state.cost,
            incomes: state.income
        }
    });
    
    

    return (
        <div className={styles.container}>
            <h1>Transaction List</h1>
            <List cost={costs} income={incomes} />
        </div>
    )
};

export default TransactionList;