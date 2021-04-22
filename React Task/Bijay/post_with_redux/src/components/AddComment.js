import React, { useState } from "react";
import "./Styles/Addcomment.css";

const AddComment = ({ addNewComment, notFocused }) => {
  const [addedComment, setAddedComment] = useState("");

  return (
    <div className="add-comment">
      <form onSubmit={e => addNewComment(e, addedComment)}>
        <input
          id="is-focus"
          type="text"
          name="addedComment"
          placeholder="Enter Comment..."
          autoFocus
          onChange={e => setAddedComment(e.target.value)}
          value={addedComment}
          onBlur={notFocused}
        />
      </form>
      <p>
        <i
          onClick={e => addNewComment(e, addedComment)}
          class="fas fa-plus"
        ></i>
      </p>
    </div>
  );
};

export default AddComment;
