import { useState } from "react";

const useTodoState = () => {
  const [editBtn, setEditBtn] = useState(false);

  const disableEditBtn = () => {
    setEditBtn(!editBtn);
  };

  return {
    editBtn,
    disableEditBtn,
  };
};

export default useTodoState;
