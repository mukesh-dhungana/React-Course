import React from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoListComponent({ todos, handleDelete }) {
  return (
    <div>
      <List>
        {todos.map((item, index) => (
          <ListItem key={index}>
            <Checkbox></Checkbox>
            <ListItemText primary={item} />
            <IconButton aria-label="Delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoListComponent;
