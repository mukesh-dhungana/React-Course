import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import { deleteTodo } from "../redux/todoSlice";

function Todo({ todo, dispatch, setOpenModal, setEditTodo }) {
  return (
    <ListItem>
      <ListItemText id="switch-list-label-wifi" primary={todo.name} />
      <ListItemSecondaryAction>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: "0 10px !important" }}
          onClick={() => {
            setOpenModal();
            setEditTodo();
          }}
        >
          Edit
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => dispatch(deleteTodo(todo))}
        >
          Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
