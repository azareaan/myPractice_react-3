import React from "react";
import styles from "./input.module.scss"

const Input = ({type = "text", label, placeholder="", value, onChange}) => {
    return (
        <>
            <label htmlfor={label} >{label}</label>
            <input id={label} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
};

export default Input;