import styles from "./inputoption.module.scss"
import { Link } from "react-router-dom";

const InputOption = ({items, label, value, onChange}: {items: {id: number; title: string}[]; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;}) => {
    return (
        <>
            <label htmlFor="selectId">{label}</label>
            <div className={styles.selectContainer}>
                <select id="selectId" value={value} onChange={onChange}>
                    <option value=""></option>
                    {items?.map((item) => (
                        <option key={item.id}>{item.title}</option>
                    ))}
                </select>
                <Link to="/addcategory">
                    <button>add category</button>
                </Link>
            </div>
        </>
    )
};

export default InputOption;