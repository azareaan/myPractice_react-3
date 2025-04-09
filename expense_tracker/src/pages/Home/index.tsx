import styles from "./home.module.scss"
import LineChart from "../../components/Charts/LineChart"
import PieChart from "../../components/Charts/PieChart"
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

const Home = () => {
    const { costs, incomes } = useSelector((state: RootState) => {
        return {
            costs: state.cost,
            incomes: state.income
        };
    });

    const aggregateCostsByCategory = (): { name: string; value: number }[] => {
        const categoryMap: Record<string, number> = {};
        costs.forEach(({ category, quantity }) => {
            if (!category) return;
            if (!categoryMap[category]) {
                categoryMap[category] = 0;
            }
            categoryMap[category] += quantity;
        });

        return Object.keys(categoryMap).map((category) => ({
            name: category,
            value: categoryMap[category],
        }));
    };

    const aggregateDataByMonth = (): { month: string; income: number; expense: number }[] => {
        const dataMap: Record<string, { month: string; income: number; expense: number }> = {};

        [...costs, ...incomes].forEach(({ date, quantity, id }) => {
            const month = format(parseISO(date), "yyyy-MM");
            if (!dataMap[month]) {
                dataMap[month] = { month, income: 0, expense: 0 };
            }

            if (incomes.some((income) => income.id === id)) {
                dataMap[month].income += quantity;
            } else {
                dataMap[month].expense += quantity;
            }
        });

        return Object.values(dataMap).sort((a, b) => a.month.localeCompare(b.month));
    };

    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <div className={styles.chartsContainer}>
                <div className={styles.pieChart}>
                    <PieChart data={aggregateCostsByCategory()}/>
                </div>
                <div className={styles.lineChart}>
                    <LineChart data={aggregateDataByMonth()}/>
                </div>
            </div>
            <Link to="/transactionlist"><button className={styles.transactionsShowButton}>View Transactions</button></Link>
        </div>
    )
};

export default Home;