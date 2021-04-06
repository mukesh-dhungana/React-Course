import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/todoSlice";
import Todo from "./Todo";

function Todolists() {
  const todoList = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));

    setNewTodo("");
  };

  return (
    <div style={{ width: "40%", margin: "10px auto" }}>
      <form onSubmit={handleAddTodo}>
        <TextField
          id="outlined-secondary"
          label="Enter Todo"
          variant="outlined"
          color="secondary"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>

      <List subheader={<ListSubheader>Todo</ListSubheader>}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            setEditTodo={() => setEditTodo(todo)}
            setOpenModal={() => setOpenModal(true)}
          />
        ))}
      </List>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={editTodo.name}
            onChange={(e) => setEditTodo({ ...editTodo, name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => dispatch(updateTodo(editTodo))}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Todolists;
