import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface CategoryPieChartProps {
  data: { category: string; value: number }[];
}

export const CategoryPieChart = ({ data }: CategoryPieChartProps) => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Category-wise Spending</h2>
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </div>
);
