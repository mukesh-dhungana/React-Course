import React from "react";
import './LandingPage.css'
// import Svg from './bg.svg'
const LandingPage = () => {
  return (
    <div id="container">
      <div id="content-container">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <button>Read More</button>
      </div>
      <div id="bg-container">
        {/* <svg> <Svg /> </svg> */}
      </div>
    </div>
  );
};

export default LandingPage;
