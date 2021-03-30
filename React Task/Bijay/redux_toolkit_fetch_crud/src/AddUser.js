import React, { useState } from "react";

const AddUser = ({ handleForm, userDetail, user, editMode, editInfo }) => {
  const [userInfo, setUserInfo] = useState(user);

  const handleCancel = () => {
    console.log("Add User");
    handleForm(false);
    // handleEditUser(false);
  };

  const handleChange = e => {
    console.log(e.target.value);
    setUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!editMode) {
      userDetail(userInfo);
    }
    else {
      console.log('Edit Mode', userInfo);
      editInfo(userInfo);
    }
    handleForm(false);
  };

  return (
    <div className="add-user">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-group row">
            <label htmlFor="staticFullName" className="col-sm-2 col-form-label">
              Full Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticEmail"
                name="fullName"
                defaultValue={editMode ? user.fullName : "Your Full Name"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticAddress" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticEmail"
                name="address"
                defaultValue={editMode ? user.address : "Your Address"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticEmail"
                name="email"
                defaultValue={editMode ? user.email : "email@example.com"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Role</label>
            <select
              className="form-control col-sm-10"
              id="exampleSelect1"
              name="role"
              onChange={handleChange}
              defaultValue={editMode ? user.role : ""}
            >
              <option value="admin">admin</option>
              <option value="moderator">moderator</option>
              <option value="viewer">viewer</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddUser;
