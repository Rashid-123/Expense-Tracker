import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ExpenseChartProps {
  data: { category: string; budget: number; spent: number }[];
}

export const ExpenseChart = ({ data }: ExpenseChartProps) => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Budget vs Actual Spending</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="budget" fill="#0088FE" name="Budget" />
        <Bar dataKey="spent" fill="#FF8042" name="Actual Spending" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
