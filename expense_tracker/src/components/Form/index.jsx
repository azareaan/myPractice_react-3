import React from "react";
import styles from "./form.module.scss"

const Form = ({children, onSubmit}) => {
    return (
        <>
            <form className={styles.form} onSubmit={onSubmit}>
                {children}
            </form>
        </>
    )
};

export default Form;