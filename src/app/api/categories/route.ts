import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Category from "@/models/category"; // Import the Mongoose model

// Ensure database connection
connectDB();

// Get all categories
export async function GET() {
  try {
    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

// Create a new category
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, color } = body;

    if (!name || !color) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newCategory = await Category.create({ name, color });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}
