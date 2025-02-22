"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Expense Tracker
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop & Mobile Navigation */}
        <ul className={cn(
          "md:flex gap-8 items-center", 
          isOpen ? "block mt-4 space-y-3 md:space-y-0 md:mt-0" : "hidden md:flex"
        )}>
          <li>
            <Link 
              href="/" 
              className={pathname === "/" ? "bg-blue-500  px-2 py-1 rounded-md text-white font-semibold" : "hover:text-blue-300 transition px-4 py-2 rounded-md"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/transactions" 
              className={pathname === "/transactions" ? "bg-blue-500 px-2 py-1 rounded-md text-white font-semibold" : "hover:text-blue-300 transition px-4 py-2 rounded-md"}
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard" 
              className={pathname === "/dashboard" ? "bg-blue-500 px-2 py-1 rounded-md text-white font-semibold" : "hover:text-blue-300 transition px-4 py-2 rounded-md"}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href="/budgets" 
              className={pathname === "/budgets" ? "bg-blue-500 px-2 py-1 rounded-md text-white font-semibold" : "hover:text-blue-300 transition px-4 py-2 rounded-md"}
            >
              Budget
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
