import React, { useState } from "react";
import {withRouter, useParams} from 'react-router-dom'
import AddUser from "./AddUser";

const User = ({users, history}) => {
  const [editUser, setEditUser] = useState(false);
   
  const {id} = useParams();

    const user = users.find(x => x.id === +id)
    console.log(user);

  const handleEditUser = (value) => {
      setEditUser(value)
  }

  return (
    <>
      <div className=" user-container card">
        <div className="card-body">
          <h4 className="card-title">{user.fullName}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{user.role}</h6>
          <p className="card-text">
            <span>{user.email}</span> || <span>{user.address}</span>
          </p>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEditUser}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => history.push('/users')}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="edit-container">{editUser && <AddUser handleForm={handleEditUser} />}</div>
    </>
  );
};

export default withRouter(User);
