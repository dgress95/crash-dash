import React from "react";
import { logCrash } from "../../firebaseUtils";
import "./logEvent.css";

const LogEvent = ({ developerId, eventName }) => {
  const handleClick = () => {
    logCrash(developerId);
  };
  return (
    <div className="button-container">
      <button onClick={handleClick}>{eventName}</button>
    </div>
  );
};

export default LogEvent;
