import React from "react";
import { Badge, Container } from "react-bootstrap";
import UserForm from "../../components/UserForm/UserForm";

function AddUser() {
  return (
    <Container className="mt-5 col-5">
      <h2>
        <Badge variant="secondary">Add a new user</Badge>
      </h2>
      <UserForm
        actionType="add"
        user={{ username: "", address: "", email: "" }}
      />
    </Container>
  );
}

export default AddUser;
