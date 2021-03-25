import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashbaord</h1>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Dashboard;
