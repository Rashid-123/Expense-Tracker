import mongoose, { Schema, model, Document } from "mongoose";

export interface Budget extends Document {
  category: string;
  monthlyLimit: number;
}

const BudgetSchema = new Schema<Budget>({
  category: { type: String, required: true, unique: true },
  monthlyLimit: { type: Number, required: true },
});

export default mongoose.models.Budget || model<Budget>("Budget", BudgetSchema);
