import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nvarbar() {
  return (
    <Navbar bg="info " expand="lg">
      <Container>
        <Navbar.Brand href="#home">User's Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink className="nav-item" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-item" to="/adduser">
                Add User
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-item" to="/all-users">
                View Users
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nvarbar;
