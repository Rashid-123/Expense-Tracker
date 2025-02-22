// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useRouter } from "next/navigation";

// export default function HomePage() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
//       <Card className="w-full max-w-3xl shadow-sm border border-gray-200 rounded-2xl py-10 px-8">
//         <CardHeader className="text-center">
//           <CardTitle className="text-4xl font-extrabold text-gray-900">Smart Expense Tracker</CardTitle>
//         </CardHeader>
//         <CardContent className="text-center">
//           <p className="text-lg text-gray-700">
//             Manage your expenses efficiently with transaction tracking, budget management, and insightful analytics.
//           </p>
//         </CardContent>
//       </Card>
      
//       <Card className="w-full max-w-3xl mt-6 shadow-sm border border-gray-200 rounded-2xl py-8 px-8">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl font-bold text-gray-900">App Features</CardTitle>
//         </CardHeader>
//         <CardContent className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg text-gray-700">
//           <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center font-semibold">
//             <span className="text-3xl">📅</span>
//             <span>Monthly Budget Management</span>
//           </div>
//           <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center font-semibold">
//             <span className="text-3xl">📊</span>
//             <span>View Monthly Transactions</span>
//           </div>
//           <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center font-semibold">
//             <span className="text-3xl">📌</span>
//             <span>Category-wise Budgeting</span>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="w-full max-w-3xl mt-6 shadow-sm border border-gray-200 rounded-2xl py-8 px-8">
//         <CardContent>
//           <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 gap-4">
//             <Button
//               className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-xl px-6"
//               onClick={() => router.push("/transactions")}
//             >
//               View Transactions
//             </Button>
            
//             <Button
//               className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white text-lg py-3 rounded-xl px-6"
//               onClick={() => router.push("/dashboard")}
//             >
//               Dashboard
//             </Button>
            
//             <Button
//               className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white text-lg py-3 rounded-xl px-6"
//               onClick={() => router.push("/budgeting")}
//             >
//               Manage Budget
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <Card className="w-full max-w-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 rounded-2xl py-10 px-8">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-gray-900">Smart Expense Tracker</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-gray-700">
            Manage your expenses efficiently with transaction tracking, budget management, and insightful analytics.
          </p>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-3xl mt-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 rounded-2xl py-10 px-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">App Features</CardTitle>
        </CardHeader>
        <CardContent className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg text-gray-700">
          <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center font-semibold">
            <span className="text-3xl">📅</span>
            <span className="text-center font-semibold">Monthly Budget Management</span>
          </div>
          <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center font-semibold">
            <span className="text-3xl">📊</span>
            <span className="text-center font-semibold">View Monthly Transactions</span>
          </div>
          <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center font-semibold">
            <span className="text-3xl">📌</span>
            <span className="text-center font-semibold">Category-wise Budgeting</span>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-3xl mt-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 rounded-2xl py-10 px-8">
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 gap-4">
            <Button
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-2xl px-6"
              onClick={() => router.push("/transactions")}
            >
              View Transactions
            </Button>
            
            <Button
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white text-lg py-3 rounded-2xl px-6"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </Button>
            
            <Button
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white text-lg py-3 rounded-2xl px-6"
              onClick={() => router.push("/budgeting")}
            >
              Manage Budget
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
