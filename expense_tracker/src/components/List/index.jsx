import React from "react";
import styles from "./list.module.scss"

const List = ({cost, income}) => {

    const allTransactions = [
        ...cost.map(item => ({ ...item, type: 'cost' })),
        ...income.map(item => ({ ...item, type: 'income' }))
    ];

    return (
        <div className={styles.listContainer}>
            <div className={styles.listItem_header}>
                <p>title</p>
                <p>category</p>
                <p>date</p>
                <p>quantity</p>
            </div>
            {allTransactions.map((item) => (
                <div className={styles.listItem} key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p>{new Date(item.date).toLocaleDateString()}</p>
                    <p>{item.type === 'income' ? '+' : '-'}{item.quantity}</p>
                </div>
            ))}
        </div>
    )
};

export default List;