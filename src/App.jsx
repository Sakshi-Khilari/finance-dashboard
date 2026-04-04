import { useState } from "react";
import { transactions as data } from "./data/mockData";
import Insights from "./components/Insights";
import SummaryCard from "./components/SummaryCard";
import Transactions from "./components/Transactions";
import Charts from "./components/Charts";

function App() {
 const [transactions, setTransactions] = useState(data);

  // ✅ NEW: Role state
  const [role, setRole] = useState("viewer");


const addTransaction = () => {
  const newTransaction = {
    id: Date.now(),
    date: new Date().toISOString().split("T")[0], // ✅ ADD THIS LINE
    amount: 500,
    category: "New",
    type: "expense"
  };

  setTransactions([...transactions, newTransaction]);
};
 

  // Income
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  // Expense
  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // Balance
  const balance = income - expense;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Finance Dashboard</h2>

      {/* ✅ NEW: Role Selector */}
      <div className="mb-3 text-center">
        <label className="me-2">Role:</label>
        <select
          className="form-select w-auto d-inline"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="row">
        <SummaryCard title="Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expense} />
      </div>

      {/* ✅ role pass केलं */}
     <Transactions 
  transactions={transactions} 
  role={role} 
  addTransaction={addTransaction}
/>

<Insights transactions={transactions} />
<Charts transactions={transactions} />
      
    </div>
  );
}

export default App;