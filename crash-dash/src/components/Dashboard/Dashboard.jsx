import React from "react";
import { useCrashes } from "../../firebaseUtils";
import "./dashboard.css";
import CrashCountCard from "./DashCards/CrashCountCard/CrashCountCard";

const Dashboard = () => {
  const crashes = useCrashes();
  const crashCount = crashes.length;
  return (
    <div className="dashCards">
      <CrashCountCard count={crashCount} />
    </div>
  );
};

export default Dashboard;
