import React, { useContext } from "react";
import styles from "./costform.module.scss"
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../components/Input";
import Form from "../../components/Form";
import FormButton from "../../components/FormButton";
import InputOption from "../../components/InputOption";
import { CostContext, ADD } from "../../context/costcontext";
import { CategoryContext } from "../../context/categorycontext";
import { useDispatch, useSelector } from "react-redux";
import { costActions } from "../../redux/slices/costSlice";

const validationSchema = Yup.object({
    title: Yup.string().required(),
    quantity: Yup.number().min(1).integer().required(),
    date: Yup.date().required(),
    category: Yup.string().required()
});

const CostForm = () => {
    // const { dispatch } = useContext(CostContext);
    const dispatch = useDispatch();
    // const { categories } = useContext(CategoryContext);
    const categories = useSelector((state) => state.category)
    const costCategories = categories.filter(category => category.type === 'cost');
    

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
            const newCost = {
                id: Date.now(),
                title: values.title,
                quantity: values.quantity,
                date: values.date instanceof Date ? values.date.toISOString() : values.date,
                category: values.category
            };
            
            // dispatch({type: ADD, payload: newCost});
            dispatch(costActions.addCost(newCost));
            
            console.log("Cost added:", newCost);
            
            reset({
                title: "",
                quantity: "",
                date: "",
                category: ""
            });
        }

    return (
        <div className={styles.container}>
            <h1>Cost Form</h1>
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
                    render={({field}) => <InputOption {...field} label="category" items={costCategories} />}
                />
                <FormButton buttonText="add"/>
            </Form>
        </div>
    )
};

export default CostForm;