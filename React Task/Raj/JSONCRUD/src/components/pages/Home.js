import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
function Home(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  const deleteUser = async id => {
    // const data = users.filter((x, i) => i !== id);
    // setUsers(data);
    await Axios.delete(`http://localhost:3001/users/${id}`);
    loadData();
  };
  const loadData = async () => {
    const result = await Axios.get("http://localhost:3001/users");
    setUsers(result.data.reverse());
  };
  return (
    <div className="container">
      <h3>Home Page</h3>
      <table className="table table-striped ">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Button
                  href={`/user/view/${user.id}`}
                  color="primary"
                  variant="outlined"
                >
                  View
                </Button>
              </td>
              <td>
                <Button
                  href={`/user/edit/${user.id}`}
                  color="default"
                  variant="outlined"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  href="/"
                  onClick={e => {
                    if (window.confirm(" Are U Sure Wanted To Delete??")) {
                      e.preventDefault();
                      deleteUser(user.id);
                    } else {
                      e.preventDefault();
                    }
                  }}
                  color="secondary"
                  variant="outlined"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
