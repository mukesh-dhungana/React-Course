import React, { useState } from "react";

function useTodoState(initialValue) {
  const [todos, setTodos] = useState(initialValue);
  const [todosIndex, setTodosIndex] = useState(null);

  const addTodo = (value) => {
    let updateArr = null;
    if (todosIndex) {
      updateArr = [...todos];
      updateArr.splice(todosIndex - 1, 1, value);
      setTodosIndex(null);
    }

    const newArr = updateArr || [...todos, value];
    setTodos(newArr);
  };

  return {
    todos,
    addTodo,
    deleteTodo: (indexDelete) =>
      setTodos(todos.filter((_, index) => index !== indexDelete)),
    setIndexOfTodo: (index) => setTodosIndex(index + 1),
  };
}

export default useTodoState;
