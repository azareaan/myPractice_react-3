import styles from "./input.module.scss"

const Input = ({type = "text", label, placeholder="", value, onChange}: {type?: string; label: string; placeholder?: string; value: number | string | Date; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;}) => {
    return (
        <>
            <label className={styles.label} htmlFor={label} >{label}</label>
            <input className={styles.input} id={label} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
};

export default Input;