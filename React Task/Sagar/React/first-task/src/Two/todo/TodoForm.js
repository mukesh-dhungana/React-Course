import React from "react";
import "./todo.css";

const TodoForm = ({
  setTodos,
  todos,
  value,
  onChangeHandler,
  reset,
  index,
  valueIndex,
  disableEditBtn,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (index) {
      todos.splice(index - 1, 1, value);
      setTodos([...todos]);
      reset();
      valueIndex("");
      disableEditBtn();
    } else {
      let trimmedValue = value.trim();
      if (trimmedValue.length > 0) {
        setTodos([...todos, trimmedValue]);
        reset();
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Todo"
        onChange={onChangeHandler}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
