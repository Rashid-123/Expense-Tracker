import mongoose, { Schema, model, Document } from "mongoose";

export interface Category extends Document {
  name: string;
  color: string;
}

const CategorySchema = new Schema<Category>({
  name: { type: String, required: true, unique: true },
  color: { type: String, required: true },
});

export default mongoose.models.Category || model<Category>("Category", CategorySchema);
