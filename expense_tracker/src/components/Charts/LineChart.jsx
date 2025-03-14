import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const IncomeExpenseChart = ({data}) => {

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} />
      <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={2} />
    </LineChart>
  );
};

export default IncomeExpenseChart;
