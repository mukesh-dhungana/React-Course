import React from "react";
import "./App.css";
import useTodoState from "./customhooks/useTodoState";
import useInputState from "./customhooks/useInputState";
import Form from "./components/Form";
import Todolists from "./components/Todolists";

export default function App() {
  const { todos, addTodo, deleteTodo, setIndexOfTodo } = useTodoState([]);
  const { value, onChange, reset, setValue } = useInputState("");

  return (
    <div className="app">
      <h1>Todo App</h1>
      <Form
        addTodo={(todo) => addTodo(value)}
        reset={reset}
        value={value}
        onChange={onChange}
      />
      <Todolists
        todos={todos}
        deleteTodo={deleteTodo}
        setIndexOfTodo={setIndexOfTodo}
        setValue={setValue}
      />
    </div>
  );
}
