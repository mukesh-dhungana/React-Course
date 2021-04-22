import React, { useState } from "react";
import Child from "./Child.js";

function Contact() {
  const [array, setArray] = useState(["abc", "def", "ghi"]);

  const addArray = (value) => {
    setArray([...array, value]);
  };

  return (
    <div>
      {array.length > 0 ? (
        <Child array={array} add={addArray} />
      ) : (
        <Child add={addArray} />
      )}
    </div>
  );
}

export default Contact;
