import React, { useState } from "react";

function useForm() {
  const [todos, setTodos] = useState([]);
  return {
    todos,
    setTodos,
    handleSubmit: (e) => {
      e.preventDefault();
      if (e.target.todo.value.length > 0)
        setTodos([...todos, e.target?.todo?.value]);
      e.target.reset();
    },
    handleDelete: (id) => {
      todos.splice(id, 1);
      setTodos([...todos]);
    },
  };
}

export default useForm;
