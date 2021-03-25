import React from "react";

function ToggleButton(props) {
  const { state, setstate } = useToggle();
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

export default ToggleButton;
