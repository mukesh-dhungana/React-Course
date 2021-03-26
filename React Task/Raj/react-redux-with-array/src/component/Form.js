import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCmnt, addData, editData } from "../Actions/Actions";

function Post({ postId, x }) {
  const [data, setData] = useState("");
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState({});

  const dispatch1 = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (edit) {
      dispatch1(
        editData({
          postId: postId,
          payload: {
            ...detail,
            comment: data,
          },
        })
      );
    } else {
      dispatch1(
        addData({
          postId,
          payload: {
            id: Math.floor(Math.random() * 1000),
            comment: data,
            commenter: "RaZz",
            commentedDate: new Date(),
          },
        })
      );
    }
  };

  const editCmnt = (data, pid) => {
    setData(data.comment);
    setEdit(true);
    setDetail(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={e => setData(e.target.value)}
          value={data}
        />

        <button>Click</button>
      </form>
      <h2>{x.title}</h2>
      <h2>{x.postedBy}</h2>
      {x.postComments.map((data, i) => {
        return (
          <div key={i}>
            <p>Comment: {data.comment}</p>
            <p>commenter: {data.commenter}</p>

            <button onClick={() => editCmnt(data, x.id)}>Edit</button>
            <button
              onClick={() =>
                dispatch1(deleteCmnt({ postId: x.id, commentId: data.id }))
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
