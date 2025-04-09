type Transaction = {
    id: number;
    title: string;
    date: string;
    quantity: number;
    category: string;
}

type Category = {
    id: number;
    type: 'cost' | 'income';
    title: string;
}

export type RootState = {
    cost?: Transaction[];
    income?: Transaction[];
    category?: Category[];
}

export type FormValues = {
    title: string;
    quantity: number;
    date: Date;
    category: string;
}

export type CategoryFormValues = {
    title: string;
    category: "cost" | "income";
}