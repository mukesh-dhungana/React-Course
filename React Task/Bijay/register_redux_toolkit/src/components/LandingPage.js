import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../reducers/UsersSlice";
import "./LandingPage.css";
import bg from './bg.png'
const LandingPage = () => {
  const user = useSelector(selectLoggedUser);

  return (
    <div id="container">
      <div id="content-container">
        <h1>
          Welcome <cite className="user-text">{user.fullName}</cite>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <button>Read More</button>
      </div>
      <div id="bg-container"><img src={bg} className="landing-bg" alt="bg" /></div>
    </div>
  );
};

export default LandingPage;
