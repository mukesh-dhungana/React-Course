import React from "react";
import "./Error.css";
import notFound from "./error/error-img.png";
const ErrorPage = ({ history }) => {
  return (
    <div>
      <div className="wrap">
        <div className="header">
          <div className="logo">
            <h1>OOPPPSSS!!!!</h1>
          </div>
        </div>

        <div className="content">
          <img src={notFound} title="error" />
          <p>
            <span>
              <label>O</label>hh.....
            </span>
            You Requested the page that is no longer There.
          </p>
          <button className="btn" onClick={() => history.push("/dashboard")}>
            {" "}
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>GO HOME</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
