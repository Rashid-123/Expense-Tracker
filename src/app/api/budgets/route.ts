import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db"; // Ensure this function connects to MongoDB
import Budget from "@/models/budget"; // Import the Mongoose model

// Ensure DB connection before performing queries
connectDB();

// Get all budgets
export async function GET() {
  try {
    const budgets = await Budget.find(); // Use `find()` for MongoDB, not `findMany()`
    return NextResponse.json(budgets);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch budgets" }, { status: 500 });
  }
}

// Create a new budget
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category, monthlyLimit } = body;

    if (!category || !monthlyLimit) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newBudget = await Budget.create({ category, monthlyLimit }); // Use `create()`
    return NextResponse.json(newBudget, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create budget" }, { status: 500 });
  }
}
