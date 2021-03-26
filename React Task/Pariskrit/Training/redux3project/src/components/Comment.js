import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardActions, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./comment.css";
import Avatar from "@material-ui/core/Avatar";

function Comment({ comments, handleDelete, handleEdit }) {
  return (
    // <Card className="comment">
    //   <CardHeader
    //     className="comment__header"
    //     title={commenter.toUpperCase()}
    //     subheader={commentedDate}
    //     avatar={<Avatar aria-label="recipe">P</Avatar>}
    //   />
    //   <p>{comment}</p>
    //   <CardActions>
    //     <IconButton onClick={() => handleDelete(id)}>
    //       {" "}
    //       <DeleteIcon className="deleteicon" />
    //     </IconButton>

    // <EditIcon
    //   className="editicon"
    //   onClick={() => handleEdit(comment, id)}
    // />
    //   </CardActions>
    // </Card>
    comments.map(({ id, comment, commenter }) => (
      <div key={id} className="comment">
        <Avatar aria-label="comment">R</Avatar>
        <div className="comment__descriptions">
          <div className="comment__descriptions__top">
            <p className="comment__descriptions__date">
              {commenter} . <span className="comment__date">Mar 26</span>
            </p>
            <p className="comment__descriptions__comment">{comment}</p>
          </div>
          <div className="comment__buttons">
            <IconButton onClick={() => handleDelete(id)}>
              {" "}
              <DeleteIcon className="deleteicon" />
              <p>Delete</p>
            </IconButton>

            <IconButton onClick={() => handleEdit(comment, id)}>
              <EditIcon className="editicon" />
              <p>Edit</p>
            </IconButton>
          </div>
        </div>
      </div>
    ))
  );
}

export default Comment;
