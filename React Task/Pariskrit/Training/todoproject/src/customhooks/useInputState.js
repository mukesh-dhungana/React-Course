import { useState } from "react";

function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (event) => setValue(event.target.value),
    reset: () => setValue(""),
    setValue: (todoToEdit) => {
      setValue(todoToEdit);
    },
  };
}

export default useInputState;
