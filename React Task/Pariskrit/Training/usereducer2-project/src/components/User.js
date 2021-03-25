import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

function User({ user, index, dispatch }) {
  const history = useHistory();
  const { id, username } = user;

  return (
    <ListItem
      key={id}
      button
      onClick={() => history.push({ pathname: `/user/${id}`, state: user })}
    >
      <ListItemText>{index + 1}.</ListItemText>
      <ListItemText primary={username} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch({ type: "DELETE_USER", id })}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default User;
