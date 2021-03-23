import React from "react";
import { store } from "../Redux/store";
import "./style.css";

function UserDetail() {
  const data = store?.getState()?.userReducer?.allUser;

  return (
    <div>
      {data.length &&
        data.map((item, index) => (
          <div key={index} className="listContainer">
            <p>{index}</p>
            <p>{item.title}</p>
            <p>{"" + item.completed}</p>
            <p>{item.id}</p>
          </div>
        ))}
    </div>
  );
}

export default UserDetail;
