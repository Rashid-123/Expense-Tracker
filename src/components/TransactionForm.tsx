"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useTransactionStore } from "@/stores/useTransactionStore";

interface TransactionFormProps {
  onClose: () => void;
}

const predefinedCategories = ["Food", "Transport", "Shopping", "Entertainment", "Bills", "Health"];

export const TransactionForm = ({ onClose }: TransactionFormProps) => {
  const { addTransaction } = useTransactionStore();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(predefinedCategories[0]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (amount && category && date && description) {
      addTransaction({ 
        id: Date.now().toString(), 
        amount: parseFloat(amount), 
       category,
        date, 
        description 
      });

      setAmount("");
      setCategory(predefinedCategories[0]);
      setDate("");
      setDescription("");

      // Close the modal after submission
      onClose();
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-white text-black border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-black">Add New Transaction</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new transaction.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Input 
            placeholder="Amount" 
            value={amount} 
            type="number"
            onChange={(e) => setAmount(e.target.value)} 
            className="bg-white text-black border-gray-300" 
          />
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="bg-white text-black border-gray-300 p-2 rounded-md"
          >
            {predefinedCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <Input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="bg-white text-black border-gray-300" 
          />
          <Input 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="bg-white text-black border-gray-300" 
          />

          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white">
            Save
          </Button>
          <Button variant="outline" onClick={onClose} className="border-gray-400 text-black">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
