import React from "react";
import { logCrash } from "../../firebaseUtils";
import "./logEvent.css";

const LogEvent = ({ developerId, eventName }) => {
  const handleClick = () => {
    logCrash(developerId);
  };
  return <button onClick={handleClick}>{eventName}</button>;
};

export default LogEvent;
