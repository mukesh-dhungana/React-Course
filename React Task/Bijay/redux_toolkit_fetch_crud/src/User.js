import React, { useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import AddUser from "./AddUser";
import { useSelector, useDispatch } from "react-redux";

import { editUsers, selectUsers } from "./UsersSlice";

const User = ({ history }) => {
  const singleUser = useSelector(selectUsers);
  const dispatch = useDispatch();

  const [editUser, setEditUser] = useState(false);

  const { id } = useParams();

  const user = singleUser.find(x => x.id === +id);
  // console.log(user);

  const handleEditUser = value => {
    setEditUser(value);
  };

  const editInfo = userInfo => {
    console.log(userInfo);
    // dispatch({
    //   type: "EDIT_USER",
    //   payload: userInfo,
    // });
    dispatch(editUsers(userInfo))
  };

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
              onClick={() => history.push("/users")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="edit-container">
        {editUser && (
          <AddUser
            handleForm={handleEditUser}
            user={user}
            editMode={editUser}
            editInfo={editInfo}
          />
        )}
      </div>
    </>
  );
};

export default withRouter(User);
