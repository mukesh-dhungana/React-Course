import React from "react";
import "./Styles/Addcomment.css";

const AddComment = ({addNewComment}) => {

    // const addComment = (e) => {
    //     e.preventDefault();
    //     console.log('Clicked');
    // }

    const newComment = () => {
        console.log('value');
    }

  return (
    <div className="add-comment">
      <form onSubmit={addNewComment} >
        <input
          type="text"
          name="comment"
          placeholder="Enter Comment..."
          autoFocus="true"
          onChange={newComment}
        />
      </form>
      <p><i onClick={addNewComment} class="fas fa-plus"></i></p>
    </div>
  );
};

export default AddComment;
