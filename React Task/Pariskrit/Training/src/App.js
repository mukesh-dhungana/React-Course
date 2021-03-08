import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const [showPage, setShowPage] = React.useState({ Home: true });
  const handleClick = (e) => {
    setShowPage({ [e.target.textContent]: true });
  };

  return (
    <div className="app">
      <Navbar handleClick={handleClick} showPage={showPage} />
      {showPage.Home && <Home />}
      {showPage.About && <About />}
      {showPage.Contact && <Contact />}
    </div>
  );
}
