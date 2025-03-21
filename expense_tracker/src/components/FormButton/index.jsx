import React from "react";
import styles from "./formbutton.module.scss"

const FormButton = ({buttonText}) => {
    return (
        <>
            <button className={styles.button}>{buttonText}</button>
        </>
    )
};

export default FormButton;