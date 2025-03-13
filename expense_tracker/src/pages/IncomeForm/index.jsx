import React from "react";
import styles from "./incomeform.module.scss";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../components/Input";
import Form from "../../components/Form";
import FormButton from "../../components/FormButton";
import InputOption from "../../components/InputOption";

const validationSchema = Yup.object({
    title: Yup.string().required(),
    quantity: Yup.number().min(1).integer().required(),
    date: Yup.date().required(),
    category: Yup.string().required()
});

const IncomeForm = () => {
    const category = [
        "1",
        "2",
        "3"
    ];

    const {
        handleSubmit,
        getValues,
        formState: {errors},
        control
    } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = (values) => {
        console.log({values, errors});
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
                    render={({field}) => <Input {...field} label="quantity" type="number" />}
                />
                <Controller
                    control={control}
                    name="date"
                    render={({field}) => <Input {...field} label="date" type="date" />}
                />
                <Controller
                    control={control}
                    name="category"
                    render={({field}) => <InputOption {...field} label="category" items={category} />}
                />
                <FormButton buttonText="add"/>
            </Form>
        </div>
    )
};

export default IncomeForm;