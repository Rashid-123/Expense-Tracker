import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BudgetCardProps {
  category: string;
  budget: number;
  spent: number;
}

export const BudgetCard = ({ category, budget, spent }: BudgetCardProps) => {
  const percentage = Math.min((spent / budget) * 100, 100);

  return (
    <Card className="w-full p-4 bg-white rounded-lg shadow-md">
      <CardHeader>
        <CardTitle>{category} Budget</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">Budget: ${budget}</p>
        <p className="text-sm text-gray-500">Spent: ${spent}</p>
        <Progress value={percentage} />
      </CardContent>
    </Card>
  );
};
