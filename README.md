# 💰 Expense Tracker 🚀  

A **Next.js**-powered expense tracker that helps users manage their income and expenses efficiently. With API routes for data handling, this app provides a seamless budgeting experience.  

## 🌍 Live Demo  
🔗 [View the Live App](https://your-live-url.vercel.app/)  

---

## 📌 Features  
✅ Add, edit, and delete expenses 💸  
✅ Categorize expenses for better tracking 📊    
✅ API routes for handling transactions 🔄  
✅ Monthly expense summaries 🗓️  
✅ Responsive design for all devices 📱  

---

## 🚀 Tech Stack  
- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** API Routes (Next.js)  
- **Database:** MongoDB with Mongoose   

---

## 🛠️ Setup Instructions  

### 1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/Rashid-123/Expense-tracker.git
cd your-repo
```

### 2️⃣ **Install Dependencies**  
```bash
npm install
```

### 3️⃣ **Set Up Environment Variables**  
Create a `.env.local` file and add:  
```env

MONGO_URI=mongodb+srv://your-mongodb-url

```

### 4️⃣ **Run the Development Server**  
```bash
npm run dev
```
Your app will be live at **`http://localhost:3000`** 🚀  

---

## 🐟 API Routes  

| Method | Endpoint                 | Description               |
|--------|--------------------------|---------------------------|
| GET    | `/api/transactions`      | Fetch all transactions    |
| POST   | `/api/transactions`      | Add a new transaction     |
| GET    | `/api/transactions/:id`  | Get transaction by ID     |
| PUT    | `/api/transactions/:id`  | Update a transaction      |
| DELETE | `/api/transactions/:id`  | Delete a transaction      |
| GET    | `/api/budgets`           | Get all Budgets           |
| POST   | `/api/budgets`           | Create a new budget       |

---


💰 **Track your expenses wisely!** 🚀  

