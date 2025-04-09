import styles from "./form.module.scss"

const Form = ({children, onSubmit}: {children: React.ReactNode; onSubmit: (event: React.FormEvent<HTMLFormElement>) => void}) => {
    return (
        <>
            <form className={styles.form} onSubmit={onSubmit}>
                {children}
            </form>
        </>
    )
};

export default Form;