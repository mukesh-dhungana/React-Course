import Comments from "./Comments";
import React, { useEffect } from "react";
import { initialState } from "./constant";
import { showData } from "../services/actions/action";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.posts, shallowEqual);

  useEffect(() => {
    dispatch(showData(initialState.posts));
  }, [initialState.posts]);

  return (
    <div>
      {selector.map((p) => (
        <div key={p.id} className="wrapper">
          <h4>{p.postedBy}</h4>
          <p>{p.postedDate}</p>
          <img src={p.imgUrl} alt="image" />
          <Comments comment={p.postComments} post={p.id} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
