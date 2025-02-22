import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Transaction from "@/models/transaction";

// Ensure database connection
connectDB();

// ✅ Edit transaction (PATCH)
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();

    // Ensure the date is stored correctly if updated
    if (body.date) {
      body.date = new Date(body.date);
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(id, body, { new: true });

    if (!updatedTransaction) {
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTransaction);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update transaction" }, { status: 500 });
  }
}

// ✅ Delete transaction (DELETE)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete transaction" }, { status: 500 });
  }
}
