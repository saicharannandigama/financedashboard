import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t => t.type === "expense");

  const top = expenses.reduce((max, t) =>
    t.amount > (max?.amount || 0) ? t : max,
    null
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-2">Insights</h2>

      {top ? (
        <p>
          Top Spending: {top.category} (₹{top.amount})
        </p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Insights;