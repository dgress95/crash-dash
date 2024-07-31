import React from "react";
import "./sidebar.css";
import User from "../Auth/User";
import SignOut from "../Auth/SignOut";

const Sidebar = ({ setIsAuth }) => {
  return (
    <div className="side-bar">
      <div className="header-container">
        <h2 className="header-title">Crash Dash</h2>
      </div>
      <User />
      <SignOut setIsAuth={setIsAuth} />
    </div>
  );
};

export default Sidebar;
