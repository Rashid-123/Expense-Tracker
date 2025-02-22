"use client";

import { useState, useEffect } from "react";
import { useTransactionStore } from "@/stores/useTransactionStore";
import { useBudgetStore } from "@/stores/useBudgetStore";
import { ExpenseChart } from "@/components/ExpenseChart";
import { BudgetCard } from "@/components/BudgetCard";
import { TransactionForm } from "@/components/TransactionForm";

export default function BudgetPage() {
  const { transactions, fetchTransactions } = useTransactionStore();
  const { budgets, fetchBudgets } = useBudgetStore();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
  }, []);

  const budgetData = budgets.map((budget) => {
    const spent = transactions
      .filter((t) => t.category === budget.categoryId)
      .reduce((sum, t) => sum + t.amount, 0);
    return { category: budget.categoryId, budget: budget.monthlyLimit, spent };
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Budgeting</h1>

      <button
        className="bg-primary text-white px-4 py-2 rounded-md"
        onClick={() => setModalOpen(true)}
      >
        Set Monthly Budget
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.categoryId}
            category={budget.categoryId}
            budget={budget.monthlyLimit}
            spent={transactions
              .filter((t) => t.category === budget.categoryId)
              .reduce((sum, t) => sum + t.amount, 0)}
          />
        ))}
      </div>

      <ExpenseChart data={budgetData} />

     {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <TransactionForm onClose={() => setModalOpen(false)} />
    </div>
  </div>
)}
 
    </div>
  );
}