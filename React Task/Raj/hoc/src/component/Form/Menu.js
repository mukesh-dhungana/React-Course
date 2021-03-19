import React from "react";
import { Link, withRouter } from "react-router-dom";

function Menu({ history, setisAuth }) {
  const isShow = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "white" };
    } else {
      return { color: "black" };
    }
  };
  return (
    <>
      <div>
        <ul className="nav nav-tabs bg-secondary">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={isShow(history, "/")}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/form"
              className="nav-link"
              style={isShow(history, "/form")}
            >
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/secondform"
              className="nav-link"
              style={isShow(history, "/secondform")}
            >
              Form @
            </Link>
          </li>
          {localStorage.getItem("item") === "false" ? (
            <>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  style={isShow(history, "/login")}
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button
                  onClick={() =>
                    setisAuth(localStorage.setItem("item", "false"))
                  }
                  className="nav-link"
                  style={{ backgroundColor: "grey" }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default withRouter(Menu);
