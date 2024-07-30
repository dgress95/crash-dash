import React from "react";
import "./crash-count-card.css";

const CrashCountCard = ({ count }) => {
  return (
    <div className="card">
      <h3>Crash Count</h3>
      <div>Total Crashes: {count}</div>
    </div>
  );
};

export default CrashCountCard;
