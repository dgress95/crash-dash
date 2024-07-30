import React from "react";
import { useCrashes } from "../../firebaseUtils";
import "./dashboard.css";
import CrashCountCard from "./DashCards/CrashCountCard/CrashCountCard";
import ChartCard from "./DashCards/ChartCard/ChartCard";
import crashData from "../../sampleData.json";

const Dashboard = () => {
  const crashes = useCrashes();
  const crashCount = crashes.length;
  return (
    <div className="dashboard">
      <CrashCountCard count={crashCount} />
      <ChartCard crashData={crashData} />
    </div>
  );
};

export default Dashboard;
