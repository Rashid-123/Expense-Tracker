import { create } from "zustand";
import { Budget } from "@/types/type";

interface BudgetStore {
  budgets: Budget[];
  setBudget: (categoryId: string, amount: number) => void;
  fetchBudgets: () => Promise<void>; // ✅ Add fetchBudgets
}

export const useBudgetStore = create<BudgetStore>((set) => ({
  budgets: [],

  setBudget: (categoryId, amount) =>
    set((state) => {
      const updatedBudgets = state.budgets.map((b) =>
        b.categoryId === categoryId ? { ...b, amount } : b
      );
      return { budgets: updatedBudgets };
    }),

  fetchBudgets: async () => {
    try {
      const response = await fetch("/api/budgets"); // Adjust API route if needed
      const data = await response.json();
      set({ budgets: data });
    } catch (error) {
      console.error("Failed to fetch budgets:", error);
    }
  },
}));
