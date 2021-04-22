import React from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from '../../reducers/UsersSlice';
import "./Navbar.css";
const NavLogged = () => {
  // const loginUser = useSelector(checkLogged)
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logged Out");
    dispatch(logoutUser());
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/">
          {" "}
          <a class="navbar-brand" href="!#">
            LOGO
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <div className="flex-start">
            <li class="nav-item active">
                <Link to="/">
                  <a class="nav-link" href="!#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link" href="!#">
                    Blogs
                  </a>
                </Link>
              </li>
            </div>
            <div className="flex-end">
              <li class="nav-item ">
                <Link to="/profile">
                  <a class="nav-link" href="!#">
                    Profile
                  </a>
                </Link>
              </li>
              <li class="nav-item left-nav">
                <Link to="/login">
                  <a class="nav-link" href="!#" onClick={handleLogout}>
                    Logout
                  </a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavLogged;
