import React, { useState } from "react";
import "./Styles/Addcomment.css";

const AddComment = ({addNewComment}) => {

    // const addComment = (e) => {
    //     e.preventDefault();
    //     console.log('Clicked');
    // }

    // const newComment = (e) => {
    //     e.preventDefault();
    //     setAddedComment(e.target.name.value)
    //     console.log('value', e.target.name.value);
    // }

    const [addedComment, setAddedComment] = useState('')

  return (
    <div className="add-comment">
      <form onSubmit={(e) => addNewComment(e, addedComment)} >
        <input
          type="text"
          name="addedComment"
          placeholder="Enter Comment..."
          autoFocus="true"
          onChange={e => setAddedComment(e.target.value)}
          value={addedComment}
        />
      </form>
      <p><i onClick={(e) => addNewComment(e,addedComment)} class="fas fa-plus"></i></p>
    </div>
  );
};

export default AddComment;
