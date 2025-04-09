import styles from "./addcategory.module.scss"
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import Form from "../../components/Form";
import Input from "../../components/Input";
import FormButton from "../../components/FormButton";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../redux/slices/categorySlice";
import { CategoryFormValues } from "../../types";

const validationSchema = Yup.object({
    title: Yup.string().required(),
    category: Yup.string().oneOf(['cost', 'income']).required(),
});

const AddCategory = () => {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        getValues,
        reset,
        control
    } = useForm<CategoryFormValues>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            title: "",
            category: "" as "cost" | "income"
        }
    });

    const onSubmit: SubmitHandler<CategoryFormValues> = (values) => {
        const newCategory = {
            id: Date.now(),
            title: values.title,
            type: values.category
        };

        dispatch(categoryActions.addCategory(newCategory));

        console.log("Category added:", newCategory);

        reset({
            title: "",
            category: "" as "cost" | "income"
        });
    };

    return (
        <div className={styles.container}>
            <h1>Add Category</h1>
            <button onClick={() => console.log(getValues())}>show values</button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="title"
                    render={({field}) => <Input {...field} label="title" placeholder="title" />}
                />
                <label>add to:</label>
                <div>
                    <Controller
                        control={control}
                        name="category"
                        render={({field}) => (
                            <>
                                <label htmlFor="cost">
                                    <input 
                                        {...field} 
                                        type="radio" 
                                        value="cost" 
                                        id="cost" 
                                        checked={field.value === "cost"}
                                    />
                                    cost
                                </label>
                                <label htmlFor="income">
                                    <input 
                                        {...field} 
                                        type="radio" 
                                        value="income" 
                                        id="income" 
                                        checked={field.value === "income"}
                                    />
                                    income
                                </label>
                            </>
                        )}
                    />
                </div>
                <FormButton buttonText="add"/>
            </Form>
        </div>
    );
};

export default AddCategory;