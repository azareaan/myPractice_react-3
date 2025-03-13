import React from "react";
import styles from "./addcategory.module.scss"
import Form from "../../components/Form";
import Input from "../../components/Input";
import FormButton from "../../components/FormButton";

const AddCategory = () => {
    return (
        <div className={styles.container}>
            <h1>Add Category</h1>
            <Form onSubmit="">
                <Input label="title"/>
                <label>add to:</label>
                <div>
                    <label htmlFor="cost">
                        <input type="radio" name="category_type" value="cost" id="cost"/>
                        cost
                    </label>
                    <label htmlFor="income">
                        <input type="radio" name="category_type" value="income" id="income"/>
                        income
                    </label>
                </div>
                <FormButton buttonText="add"/>
            </Form>
        </div>
    )
};

export default AddCategory;