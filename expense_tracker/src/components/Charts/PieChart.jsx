import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const getDynamicColor = (index) => `hsl(${(200 + ((index * 30) % 60)) % 360}, 70%, 50%)`;

const ExpensePieChart = ({data}) => {

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, percent }) =>
          `${name} ${(percent * 100).toFixed(0)}%`
        }
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry}`} fill={getDynamicColor(index)} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ExpensePieChart;
