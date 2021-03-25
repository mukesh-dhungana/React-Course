import React from "react";
import { withRouter } from "react-router-dom";
import "./Home.css";
import frontImg from "./1.jpg";
import bgImg from "./forbg1.jpg";

const Homepage = ({ isLogin, history }) => {
  const logout = () => {
    console.log("check", history);
    history.push("/");
    isLogin(false);
  };

  return (
    <>
      <div className="home-container">
        <div className="blend-box">
          <img src={frontImg} alt="This is temple" />
          <img src={bgImg} alt="This is temple" />
        </div>
      </div>
      <div className="action-box">
        <div className="home-content">
          <h1>This is HomePage</h1>
        </div>
        <button className="btn" onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default withRouter(Homepage);
