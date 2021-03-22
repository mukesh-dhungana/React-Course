import React, { useState } from "react";

const AddUser = ({handleForm, userDetail}) => {

    const [fullName, setFullName] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')


    const handleCancel = () =>{
        console.log('Add User');
        handleForm(false);
        // handleEditUser(false);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        userDetail();
        handleForm(false);
    }

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
                defaultValue="Your Full Name"
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
                defaultValue="Your Address"
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
                defaultValue="email@example.com"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleSelect1">Role</label>
            <select class="form-control col-sm-10" id="exampleSelect1">
              <option>admin</option>
              <option>moderator</option>
              <option>viewer</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddUser;
