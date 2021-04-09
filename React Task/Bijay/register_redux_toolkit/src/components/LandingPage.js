import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../reducers/UsersSlice";
import "./LandingPage.css";
import "./Parallax.css";
import bgg from "./bg.png";
import bgImg from "./images/bg.png";
import mineImg from "./images/mine.png";
import moonImg from "./images/moon.png";
import skyImg from "./images/sky.png";

// const cursor = document.getElementById("cursor");
// const bg = document.getElementById("bg");
// const mine = document.getElementById("mine");
// const moon = document.getElementById("moonn");
// const sky = document.getElementById("sky");
// const headingText = document.getElementById("heading-text");
const cursor = document.getElementById("cursor");

// document.addEventListener("scroll", () => {
//   var value = window.scrollY;
//   console.log("Scrolled", value);
  
//     bg.style.top = value * 2 + "px";
//     moon.style.right = value * 2 + "px";
//     // moon.style.top = value * 5 + "px";
//     mine.style.left = -value * 0.3 + "%";
//     headingText.style.top = value * 0.3 + "%";
//     headingText.style.left = value * 0.1 + "%";
//     headingText.style.color = "#cecece";
  
// });

const LandingPage = () => {
  const user = useSelector(selectLoggedUser);

  // console.log("moon", moon);

  

  // moon.addEventListener("mouseover", () => {
  //   console.log("Mouse HOver");
  //   moon.style.top = "20%";
  // });

  document.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });

  return (
    <>
      <div className="parallax">
        <div>
          <div id="cursor" />
          <section>
            <img id="bg" src={bgImg} alt="" />
            <img id="mine" src={mineImg} alt="" />
            <img id="moonn" src={moonImg} alt="" />
            <img id="sky" src={skyImg} alt="" />
            <h2 id="heading-text"> My Light </h2>
          </section>
          <header id="second-header">
            <div id="container">
              <div id="content-container">
                <h1>
                  Welcome <cite className="user-text">{user.fullName}</cite>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button>Read More</button>
              </div>
              <div id="bg-container">
                <img src={bgg} className="landing-bg" alt="bg" />
              </div>
            </div>
          </header>
        </div>
      </div>
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
        <div id="bg-container">
          <img src={bgg} className="landing-bg" alt="bg" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
