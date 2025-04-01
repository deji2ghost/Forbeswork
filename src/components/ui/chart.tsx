import { PieChart, Pie, Tooltip, Cell } from "recharts";

type FinancialData = {
  balance: number;
  investments: number;
  savings: number;
  spendings: number;
};

type Props = {
  data: FinancialData;
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

const FinancialPieChart = ({ data }: Props) => {
  const pieData = [
    { name: "Balance", value: data.balance },
    { name: "Investments", value: data.investments },
    { name: "Savings", value: data.savings },
    { name: "Spendings", value: data.spendings },
  ];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default FinancialPieChart;
