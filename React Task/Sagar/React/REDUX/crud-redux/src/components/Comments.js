import React, { useState } from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { deleteComment } from "../services/actions/action";

const Comments = (props) => {
  const [value, setValue] = useState("");
  const [valueDetail, setValueDetail] = useState("");
  const [edit, setEdit] = useState(false);

  const editComment = (comment) => {
    console.log(comment.comment);
    setEdit(true);
    setValue(comment.comment);
    setValueDetail(comment);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <Form
        postId={props.post}
        value={value}
        setValue={setValue}
        edit={edit}
        setEdit={setEdit}
        valueDetail={valueDetail}
        posts={props.comment}
      />
      {props.comment.map((c) => (
        <div key={c.id}>
          <div className="commentBox">
            <div className="comment">
              <h5>{c.commenter}</h5>
              <p>{c.comment}</p>
            </div>
            <div className="button">
              <button onClick={() => editComment(c)}>Edit</button>
              <button onClick={() => dispatch(deleteComment(props.post, c.id))}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
