import React, { useRef } from "react";
import Hoc from "../hoc/Hoc";

const Signin = ({ onChange, result, clearData, data }) => {
  const reff = useRef();

  React.useEffect(() => {
    reff.current.focus();
  }, []);
  return (
    <>
      <h3> {result}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={onChange}
          value={data}
          name="name"
          placeholder="Input Text 1"
          ref={reff}
        />
      </form>
      <button onClick={clearData}>Clear</button>
    </>
  );
};

export default Hoc(Signin);
