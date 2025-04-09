import styles from "./transactionlist.module.scss";
import List from "../../components/List";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

const TransactionList = () => {
    const { costs, incomes } = useSelector((state: RootState) => {
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