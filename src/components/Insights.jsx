function Insights({ transactions }) {
  let totalExpense = 0;
  let categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      totalExpense += t.amount;

      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = "";
  let maxAmount = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > maxAmount) {
      maxAmount = categoryMap[cat];
      highestCategory = cat;
    }
  }

  return (
    <div className="mt-5 card p-4 shadow border-0">
      <h4>Insights</h4>

      <p>🏆 Highest Spending Category: <b>{highestCategory || "N/A"}</b></p>
      <p>💸 Total Expense: <b>₹{totalExpense}</b></p>
      <p>📊 Total Transactions: <b>{transactions.length}</b></p>
    </div>
  );
}

export default Insights;