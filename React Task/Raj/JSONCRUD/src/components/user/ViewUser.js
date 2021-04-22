import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

function ViewUser(props) {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });
  const { id } = useParams();

  const loadData = async () => {
    const result = await Axios.get("http://localhost:3001/users/" + id);
    setUsers(result.data);
  };

  useEffect(() => loadData(), []);

  return (
    <div class="container py-3">
      <div class="jumbotron">
        <Button href="/" color="secondary" variant="contained">
          Back to home
        </Button>
        <ul className="list-group py-3">
          <li className="list-group-item display-4 ">ID: {users.id}</li>
          <li className="list-group-item active ">Name: {users.name}</li>
          <li className="list-group-item">Username: {users.username}</li>
          <li className="list-group-item active">Email: {users.email}</li>
          <li className="list-group-item">Phone: {users.phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default ViewUser;
