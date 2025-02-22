import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Transaction from "@/models/transaction";

// Ensure database connection
connectDB();

// ✅ Get all transactions
export async function GET() {
  try {
    const transactions = await Transaction.find();
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 });
  }
}

// ✅ Create a new transaction
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const { amount, date, description, category } = body;
      console.log(amount , date , description ,category);
    // Validate required fields
    if (!amount || !date || !description || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Ensure the date is stored correctly
    const newTransaction = await Transaction.create({
      amount,
      date: new Date(date), // Convert string to Date
      description,
      category,
    });
        console.log(newTransaction);
    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create transaction" }, { status: 500 });
  }
}
