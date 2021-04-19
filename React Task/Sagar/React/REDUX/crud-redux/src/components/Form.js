import React from "react";
import { useDispatch } from "react-redux";
import { addComment, updateComment } from "../services/actions/action";

const Form = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (props.edit) {
            dispatch(
              updateComment(props.postId, props.value, props.valueDetail)
            );
            props.setValue("");
            props.setEdit(false);
          } else {
            dispatch(addComment(props.postId, props.value, props.posts));
            props.setValue("");
          }
        }}
      >
        <input
          type="text"
          placeholder="Comment"
          onChange={(e) => props.setValue(e.target.value)}
          value={props.value}
        />
        <input type="submit" value="Comment" />
      </form>
    </div>
  );
};

export default Form;
