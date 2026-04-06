import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import Charts from "../components/Charts";
import Transactions from "../components/Transactions";
import Insights from "../components/Insights";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <Navbar />

      <div className="p-4 space-y-4">
        <Summary />
        <Charts />
        <Insights />
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;