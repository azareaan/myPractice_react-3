import React, { useContext } from "react";
import styles from "./incomeform.module.scss";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../components/Input";
import Form from "../../components/Form";
import FormButton from "../../components/FormButton";
import InputOption from "../../components/InputOption";
import { IncomeContext, ADD } from "../../context/incomecontext";
import { CategoryContext } from "../../context/categorycontext";

const validationSchema = Yup.object({
    title: Yup.string().required(),
    quantity: Yup.number().min(1).integer().required(),
    date: Yup.date().required(),
    category: Yup.string().required()
});

const IncomeForm = () => {
    const { dispatch } = useContext(IncomeContext);
        const { categories } = useContext(CategoryContext);
        const incomeCategories = categories.filter(category => category.type === 'income');

    const {
        handleSubmit,
        getValues,
        formState: {errors},
        reset,
        control
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            title: "",
            quantity: "",
            date: "",
            category: ""
        }
    })

    const onSubmit = (values) => {
        const newIncome = {
            id: Date.now(),
            title: values.title,
            quantity: values.quantity,
            date: values.date,
            category: values.category
        };
                    
        dispatch({type: ADD, payload: newIncome});
                    
        console.log("Income added:", newIncome);
                    
        reset({
            title: "",
            quantity: "",
            date: "",
            category: ""
        });
    }
        
    return (
        <div className={styles.container}>
            <h1>Incom Form</h1>
            <button onClick={() => console.log(getValues())}>show values</button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="title"
                    render={({field}) => <Input {...field} label="title" placeholder="title" />}
                />
                <Controller
                    control={control}
                    name="quantity"
                    render={({field}) => <Input {...field} label="quantity" type="number" placeholder="quantity" />}
                />
                <Controller
                    control={control}
                    name="date"
                    render={({field}) => <Input {...field} label="date" type="date" />}
                />
                <Controller
                    control={control}
                    name="category"
                    render={({field}) => <InputOption {...field} label="category" items={incomeCategories} />}
                />
                <FormButton buttonText="add"/>
            </Form>
        </div>
    )
};

export default IncomeForm;