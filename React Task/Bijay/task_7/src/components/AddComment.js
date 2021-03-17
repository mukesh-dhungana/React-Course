import React, { useState } from "react";
import "./Styles/Addcomment.css";

const AddComment = ({ addNewComment, notFocused }) => {
  // const addComment = (e) => {
  //     e.preventDefault();
  //     console.log('Clicked');
  // }

  // const newComment = (e) => {
  //     e.preventDefault();
  //     setAddedComment(e.target.name.value)
  //     console.log('value', e.target.name.value);
  // }

  // const isFocused = () => {
  //   console.log(document.getElementById("is-focus").is(":focus"))
  //   document.getElementById("is-focus").is(":focus");
  // };

  // if(isFocused) {
  //   console.log('Focused')
  // }


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
