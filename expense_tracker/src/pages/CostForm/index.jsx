import React from "react";
import styles from "./costform.module.scss"
import Input from "../../components/Input";
import Form from "../../components/Form";
import FormButton from "../../components/FormButton";
import InputOption from "../../components/InputOption";

const CostForm = () => {
    const category = [
        "1",
        "2",
        "3"
    ];

    return (
        <div className={styles.container}>
            <h1>Cost Form</h1>
            <Form onSubmit="">
                <Input label="title"/>
                <Input label="quantity" type="number"/>
                <Input label="date" type="date"/>
                <InputOption label="category" items={category}/>
                <FormButton buttonText="add"/>
            </Form>
        </div>
    )
};

export default CostForm;