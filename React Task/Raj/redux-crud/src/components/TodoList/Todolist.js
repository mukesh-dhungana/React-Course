import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

export const Todolist = () => {
  const todoListData = useSelector(state => state.todos.data);
  const todoItem = todoListData.map(item => {
    return <TodoItem item={item} key={item.id} />;
  });
  return (
    <div>
      <h1>Todo List</h1>
      <h2>{todoItem}</h2>
    </div>
  );
};
