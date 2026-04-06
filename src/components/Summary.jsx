import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Summary = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-green-100 p-4 rounded-xl shadow">
        <h2 className="font-bold">Balance</h2>
        <p>₹{balance}</p>
      </div>

      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h2 className="font-bold">Income</h2>
        <p>₹{income}</p>
      </div>

      <div className="bg-red-100 p-4 rounded-xl shadow">
        <h2 className="font-bold">Expenses</h2>
        <p>₹{expense}</p>
      </div>
    </div>
  );
};

export default Summary;