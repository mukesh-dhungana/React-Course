import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardActions, CardContent } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./comment.css";

function Comment({
  comment: { id, comment, commenter, commentedDate },
  handleDelete,
  handleEdit,
}) {
  return (
    <Card className="comment">
      <CardHeader
        className="comment__header"
        title={commenter.toUpperCase()}
        subheader={commentedDate}
      />
      <p>{comment}</p>
      <CardActions>
        <DeleteIcon className="deleteicon" onClick={() => handleDelete(id)} />
        <EditIcon
          className="editicon"
          onClick={() => handleEdit(comment, id)}
        />
      </CardActions>
    </Card>
  );
}

export default Comment;
