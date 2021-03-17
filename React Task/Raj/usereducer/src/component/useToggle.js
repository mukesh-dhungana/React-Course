import React, { useState, useEffect } from "react";
import "../App.css";

function useToggle(props) {
  const [state, setstate] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    if (state === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [state]);
  return (
    <div>
      <button
        onClick={() => setstate(state => (state === "dark" ? "light" : "dark"))}
      >
        Toggle
      </button>
    </div>
  );
}

export default useToggle;
