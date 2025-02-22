"use client";

import { useState, useEffect } from "react";
import { TransactionList } from "@/components/TransactionList";
import { TransactionForm } from "@/components/TransactionForm";
import { useTransactionStore } from "@/stores/useTransactionStore";

export default function TransactionsPage() {
  const { transactions, fetchTransactions } = useTransactionStore();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchTransactions(); // ✅ Ensures transactions are fetched on mount
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      {/* Transaction Add Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={() => setModalOpen(true)}
      >
        Add Transaction
      </button>

      {/* Transaction List */}
      {transactions.length > 0 ? (
        <TransactionList transactions={transactions} />
      ) : (
        <p className="text-gray-500 mt-4">No transactions available.</p>
      )}

      {/* Transaction Form Modal */}
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
