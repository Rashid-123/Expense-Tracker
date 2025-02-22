export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface Budget {
  id: string;
  categoryId: string;
  amount: number;
  monthlyLimit: number;
}
