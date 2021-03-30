import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import UsersRow from "./UsersRow";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUsers, deleteUsers, selectUsers, selectStatus, toggleLoading } from "./UsersSlice";
import Loader from "./Loader";

const Users = ({ history }) => {
  console.log("Toolkit", selectUsers);

  const user = useSelector(selectUsers);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const [addUser, setAddUser] = useState(false);

  const handleAddUser = value => {
    setAddUser(value);
  };

  const addNewUser = userInfo => {
    console.log("User Added", userInfo);
    // dispatch({
    //   type: "ADD_USER",
    //   payload: { ...userInfo, id: Date.now() },
    // });
    dispatch(addUsers({ ...userInfo, id: Date.now() }));
  };

  const deleteUser = id => {
    console.log("Deleted", id);
    // dispatch({
    //   type: "DELETE_USER",
    //   payload: { id: id },
    // });
    dispatch(deleteUsers({ id: id }));
  };

  useEffect(()=> {
    if(status) {
      setTimeout(()=> {
        dispatch(toggleLoading())
      }, 3000)
    }
  }, [])

  return (
    <>
      {status ? (
        <Loader />
      ) : (
        <div className="users-container">
          <div className="add-body">
            <button
              type="button"
              className="btn btn-info btn-lg btn-block"
              onClick={() => history.push("/")}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={handleAddUser}
            >
              Add New User
            </button>
            {addUser && (
              <AddUser
                handleForm={handleAddUser}
                userDetail={addNewUser}
                editMode={false}
              />
            )}
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
                {user.map(user => (
                  <UsersRow user={user} key={user.id} deleteUser={deleteUser} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

// const mapStateToProps = state => ({
//   ui: state.users.users,
// });

export default withRouter(Users);
