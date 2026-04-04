import { useState } from "react";

function Transactions({ transactions, role, addTransaction }) {
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-5">
      <h4>Transactions</h4>

      {/* Search */}
      <input
        type="text"
        placeholder="Search category..."
        className="form-control w-25 mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✅ Add button */}
      {role === "admin" && (
        <button 
          className="btn btn-primary mb-3"
          onClick={addTransaction}
        >
          Add Transaction
        </button>
      )}

      {/* Table */}
      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            {/* ✅ NEW COLUMN */}
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
              {/* ✅ DATE DISPLAY */}
              <td>{t.date}</td>

              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td className={
                t.type === "income"
                  ? "text-success"
                  : "text-danger"
              }>
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;