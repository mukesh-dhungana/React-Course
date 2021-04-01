import React from "react";
import './UserSetting.css'
const UserSetting = () => {
  return (
    <>
      <div className="wrapper bg-white mt-sm-5">
        <h4 className="pb-4 border-bottom">Account settings</h4>
        <div className="d-flex align-items-start py-3 border-bottom">
          {" "}
          <img
            src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img"
            alt=""
          />
          <div className="pl-sm-4 pl-2" id="img-section">
            {" "}
            <b>Profile Photo</b>
            <p>Accepted file type .png. Less than 1MB</p>{" "}
            <button className="btn button border">
              <b>Upload</b>
            </button>
          </div>
        </div>
        <div className="py-2">
          <div class="row py-2">
            <div className="col-md-6">
              {" "}
              <label for="firstname">First Name</label>{" "}
              <input
                type="text"
                className="bg-light form-control"
                placeholder="Steve"
              />{" "}
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              {" "}
              <label for="lastname">Last Name</label>{" "}
              <input
                type="text"
                className="bg-light form-control"
                placeholder="Smith"
              />{" "}
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-6">
              {" "}
              <label for="email">Email Address</label>{" "}
              <input
                type="text"
                className="bg-light form-control"
                placeholder="steve_@email.com"
              />{" "}
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              {" "}
              <label for="phone">Phone Number</label>{" "}
              <input
                type="tel"
                className="bg-light form-control"
                placeholder="+1 213-548-6015"
              />{" "}
            </div>
          </div>

          <div className="py-3 pb-4 border-bottom">
            {" "}
            <button className="btn btn-primary mr-3">Save Changes</button>{" "}
            <button className="btn border button">Cancel</button>{" "}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default UserSetting;
