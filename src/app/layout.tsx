export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses easily",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css"; // Ensure you have global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
