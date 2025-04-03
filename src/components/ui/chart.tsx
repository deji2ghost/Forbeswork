import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { memo } from "react";
import Loader from "./loader";

type DataPoint = {
  name: string;
  value: number;
};

type Props = {
  data: Record<string, number>; 
  height?: number;
  width?: number;
  colors?: string[];
  outerRadius?: number;
  cx?: string | number;
  cy?: string | number;
  dataKeys: { key: string; label: string }[];
  error?: string,
  loading: boolean,
};

const DEFAULT_COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

const FinancialPieChart = memo(
  ({
    error,
    loading,
    data,
    height = 250,
    width = 250,
    colors = DEFAULT_COLORS,
    outerRadius = 80,
    cx = "50%",
    cy = "50%",
    dataKeys,
  }: Props) => {
    if (!data) return null; 

    const pieData: DataPoint[] = dataKeys.map(({ key, label }) => ({
      name: label,
      value: data[key as keyof typeof data] || 0,
    }));

    if (loading) return <div className="min-h-[370px]"><Loader className="left-[40px] lg:right-[500px]" /></div>;
    if (error) return <div className="text-warning">{error}</div>;

    return (
      <PieChart width={width} height={height} className="w-full mx-auto">
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          label
        >
          {pieData.map((_item, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
);

export default FinancialPieChart;