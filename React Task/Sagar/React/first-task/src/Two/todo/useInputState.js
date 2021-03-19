import { useState } from "react";

const useInputState = () => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const putValue = (data) => {
    setValue(data);
  };

  const reset = () => {
    setValue("");
  };

  const valueIndex = (id) => {
    setIndex(id);
  };

  return {
    value,
    putValue,
    onChangeHandler,
    reset,
    index,
    valueIndex,
  };
};

export default useInputState;
