import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface MonthlyBarChartProps {
  data: { month: string; amount: number }[];
}

export const MonthlyBarChart = ({ data }: MonthlyBarChartProps) => (
  <div className="w-full p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
