import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCmnt, addData, editData } from "../Actions/Actions";

function Post({ postData }) {
  const [data, setData] = useState("");
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState({});

  const dispatch1 = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (edit) {
      dispatch1(
        editData({
          postId: postData.id,
          payload: {
            ...detail,
            comment: data,
          },
        })
      );
      setEdit(false);
      setData("");
    } else {
      dispatch1(
        addData({
          postId: postData.id,
          payload: {
            id: Math.floor(Math.random() * 1000),
            comment: data,
            commenter: "RaZz",
            commentedDate: new Date(),
          },
        })
      );
      setData("");
    }
  };

  const editCmnt = (data, pid) => {
    setData(data.comment);
    setEdit(true);
    setDetail(data);
  };
  return (
    <>
      <div className="images">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={e => setData(e.target.value)}
            value={data}
          />

          <button>Click</button>
        </form>
        <h2>{postData.title}</h2>
        <h2>{postData.postedBy}</h2>
        {postData.postComments.map((data, i) => {
          return (
            <div key={i}>
              <h4>Comment: {data.comment}</h4>
              <h4>commenter: {data.commenter}</h4>

              <button onClick={() => editCmnt(data, postData.id)}>Edit</button>
              <button
                onClick={() => {
                  var result = window.confirm("Want to delete?");
                  if (result) {
                    dispatch1(
                      deleteCmnt({ postId: postData.id, commentId: data.id })
                    );
                  }
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Post;
