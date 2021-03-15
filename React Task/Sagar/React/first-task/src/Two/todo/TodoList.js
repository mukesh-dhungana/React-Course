import React from "react";

const TodoList = ({
  todos,
  setTodos,
  putValue,
  valueIndex,
  disableEditBtn,
  editBtn,
}) => {
  const deleteHandler = (index) => {
    if (window.confirm("Are you sure?")) {
      const filteredTodos = todos.filter((_, i) => i !== index);
      setTodos(filteredTodos);
    }
  };

  const editHandler = (name, i) => {
    putValue(name);
    valueIndex(i);
    disableEditBtn();
  };

  return (
    <div>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>
          {todo}
          <div className="buttons">
            <button
              disabled={editBtn}
              className="button"
              onClick={() => editHandler(todo, i + 1)}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button
              disabled={editBtn}
              id="delete"
              className="button"
              onClick={() => deleteHandler(i)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
