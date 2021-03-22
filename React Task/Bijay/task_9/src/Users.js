import React, { useState, useReducer } from "react";
import AddUser from "./AddUser";
import UsersRow from "./UsersRow";

const Users = ({state, dispatch}) => {

    const [addUser, setAddUser] = useState(false)

    const handleAddUser = (value) => {
        setAddUser(value);
    }

    const addNewUser = (userInfo) => {
        console.log('User Added', userInfo);
        dispatch({
          type: "ADD_USER",
          payload: {...userInfo, id: state.users.length + 1}
        })
    }

    const deleteUser = (id) => {
      console.log('Deleted', id);
      dispatch({
        type: "DELETE_USER",
        payload: {id: id}
      })
    }

  return (
    <div className="users-container">
      <div className="add-body">
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleAddUser} >
          Add New User
        </button>
        { addUser && <AddUser handleForm={handleAddUser} userDetail={addNewUser} editMode={false} /> }
      </div>
      <div className="table-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Role</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((user)  => (
                <UsersRow user={user} key={user.id} deleteUser={deleteUser} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
