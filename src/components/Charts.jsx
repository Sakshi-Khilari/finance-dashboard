import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function Charts({ transactions }) {
  // 🔹 Expense Pie Chart
  const expenseData = transactions.filter(t => t.type === "expense");

  const dataMap = {};

  expenseData.forEach((t) => {
    dataMap[t.category] =
      (dataMap[t.category] || 0) + t.amount;
  });

  const pieData = Object.keys(dataMap).map((key) => ({
    name: key,
    value: dataMap[key],
  }));

  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

  // 🔹 Line Chart Data
  const lineData = transactions.map((t, index) => ({
    name: `T${index + 1}`,
    amount: t.amount,
  }));

  return (
    <div className="mt-5 text-center">

      {/* 🔥 PIE CHART */}
      <h4>Spending Breakdown</h4>

      {/* ✅ ADDED: center wrapper */}
      <div className="d-flex justify-content-center mb-4">
        {pieData.length > 0 && (
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </div>

      {/* 🔥 LINE CHART */}
      <h4 className="mt-5">Transaction Trend</h4>

      {/* ✅ ADDED: center wrapper */}
      <div className="d-flex justify-content-center">
        <LineChart width={500} height={300} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
          />
        </LineChart>
      </div>

    </div>
  );
}

export default Charts;