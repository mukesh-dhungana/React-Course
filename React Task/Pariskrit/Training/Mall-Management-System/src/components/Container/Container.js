import React from "react";
import { useHistory } from "react-router";
import "./container.css";

function Container({ heading, malls, render, path = "/user/allmalls" }) {
  const history = useHistory();

  return (
    <div className="malls">
      <h2 className="malls__title">{heading}</h2>
      <div className="malls__lists">{render && render(malls)}</div>

      <h2 className="malls__viewall" onClick={() => history.push(path)}>
        View All
      </h2>
    </div>
  );
}

export default Container;
