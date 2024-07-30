import React from "react";
import { logCrash } from "../../firebaseUtils";
import "./logEvent.css";

const LogEvent = ({ developerId }) => {
  const handleClick = () => {
    logCrash(developerId);
  };
  return <button onClick={handleClick}>Log Crash</button>;
};

export default LogEvent;
