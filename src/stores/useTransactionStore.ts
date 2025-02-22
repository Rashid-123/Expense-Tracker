import { create } from "zustand";
import { Transaction } from "@/types/type";
import { persist } from "zustand/middleware";

interface TransactionStore {
  transactions: Transaction[];
  fetchTransactions: () => Promise<void>;
  addTransaction: (transaction: Transaction) => void;
  editTransaction: (id: string, updatedTransaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
}

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set) => ({
      transactions: [],

      // Fetch transactions from API (Mock API, replace with real API)
      fetchTransactions: async () => {
        try {
          const res = await fetch("/api/transactions"); // Adjust API endpoint
          const data = await res.json();
          set({ transactions: data });
        } catch (error) {
          console.error("Failed to fetch transactions:", error);
        }
      },

      
      addTransaction: async (transaction) => {
  try {
    console.log(transaction);
    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });

    if (!res.ok) {
      throw new Error("Failed to save transaction to database");
    }

    const savedTransaction = await res.json();

    set((state) => ({
      transactions: [...state.transactions, savedTransaction], // Use response from backend
    }));
  } catch (error) {
    console.error("Error adding transaction:", error);
  }
},

      editTransaction: (id, updatedTransaction) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === id ? { ...t, ...updatedTransaction } : t
          ),
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
    }),
    { name: "transaction-store" }
  )
);
