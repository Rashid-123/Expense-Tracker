import mongoose, { Schema, model, Document } from "mongoose";

export interface Transaction extends Document {
  amount: number;
  date: Date;
  description: string;
  category: string;
}

const TransactionSchema = new Schema<Transaction>({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.models.Transaction || model<Transaction>("Transaction", TransactionSchema);
