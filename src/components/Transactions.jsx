import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Transactions = () => {
  const { transactions, role } = useContext(AppContext);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-3">Transactions</h2>

      {/* Admin Button */}
      {role === "admin" && (
        <button className="bg-blue-500 text-white px-3 py-1 rounded mb-3">
          + Add Transaction
        </button>
      )}

      {/* Transactions List */}
      {transactions.map((t) => (
        <div
          key={t.id}
          className="flex justify-between border-b py-2"
        >
          <span>{t.category}</span>
          <span className={t.type === "income" ? "text-green-500" : "text-red-500"}>
            ₹{t.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Transactions;