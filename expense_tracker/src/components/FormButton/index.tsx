import styles from "./formbutton.module.scss"

const FormButton = ({buttonText}: {buttonText: string}) => {
    return (
        <>
            <button className={styles.button}>{buttonText}</button>
        </>
    )
};

export default FormButton;