import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormComponent from "../../component/formcomponent/FormComponent";
import "./style.css";
import TodoListComponent from "../../component/todolistcomponent/TodoListComponent";
import useForm from "../../hooks/useForm";

function TodoAppScreen() {
  const { todos, handleSubmit, handleDelete } = useForm();

  return (
    <div className="todoapp">
      <Container maxWidth="sm">
        <Typography variant="h2">Todo App</Typography>
        <FormComponent onSubmit={handleSubmit} />
        <TodoListComponent todos={todos} handleDelete={handleDelete} />
      </Container>
    </div>
  );
}

export default TodoAppScreen;
