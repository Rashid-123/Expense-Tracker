"use client";

import { useEffect } from "react";
import { useTransactionStore } from "@/stores/useTransactionStore";
import { useBudgetStore } from "@/stores/useBudgetStore";
import { BudgetCard } from "@/components/BudgetCard";
import { CategoryPieChart } from "@/components/CategoryPieChart";
import { TransactionList } from "@/components/TransactionList";

export default function DashboardPage() {
  const { transactions, fetchTransactions } = useTransactionStore();
  const { budgets, fetchBudgets } = useBudgetStore();

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
  }, []);

  const totalExpenses = transactions?.reduce((sum, t) => sum + (t.amount || 0), 0) || 0;
  const recentTransactions = transactions?.slice(-5) || []; // Last 5 transactions

  // ✅ Transform transactions into category-wise data for the PieChart
  const categoryData = transactions.reduce((acc, transaction) => {
    const category = transaction.category || "Uncategorized"; // Fallback for missing categories
    const existing = acc.find((item) => item.category === category);
    if (existing) {
      existing.value += transaction.amount;
    } else {
      acc.push({ category, value: transaction.amount });
    }
    return acc;
  }, [] as { category: string; value: number }[]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Total Expenses Card */}
      <BudgetCard category="Total Expenses" budget={totalExpenses} spent={totalExpenses} />

      {/* Category-wise Expense Chart */}
      {categoryData.length > 0 && <CategoryPieChart data={categoryData} />}

      {/* Last 5 Transactions */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Recent Transactions</h2>
      <TransactionList transactions={recentTransactions} />
    </div>
  );
}