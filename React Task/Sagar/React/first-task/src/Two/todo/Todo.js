import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList.js";
import useInputState from "./useInputState";
import useTodoState from "./useTodoState";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const {
    value,
    putValue,
    onChangeHandler,
    reset,
    valueIndex,
    index,
  } = useInputState();

  const { editBtn, disableEditBtn } = useTodoState();

  return (
    <div>
      <h2>Todos</h2>

      {/* TodoForm */}
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        value={value}
        onChangeHandler={onChangeHandler}
        reset={reset}
        valueIndex={valueIndex}
        index={index}
        disableEditBtn={disableEditBtn}
      />

      {/* TodoList */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        putValue={putValue}
        valueIndex={valueIndex}
        editBtn={editBtn}
        disableEditBtn={disableEditBtn}
      />
    </div>
  );
};

export default Todo;
