import { create } from "zustand";
import { Category } from "@/types/type";

interface CategoryStore {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],

  setCategories: (categories) => set({ categories }),
}));
