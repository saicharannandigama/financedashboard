import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Charts = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div className="bg-white p-4 rounded-xl shadow h-64">
      <h2 className="font-bold mb-2">Spending Overview</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={transactions}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;