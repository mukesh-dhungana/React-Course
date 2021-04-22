import React from "react";

const Profile = (props) => {
  console.log("profile", props);
  return (
    <div>
      {props.data.map((x) => (
        <div key={x.id}>
          <img src={x.picture.large} alt="image" />
          <div>
            Hi! I am{" "}
            <b>
              {x.name.first} {x.name.last}
            </b>
            <h3>Details :</h3>
            <p>
              <b>Address :</b> {x.location.street.number}{" "}
              {x.location.street.name} Street, <b>{x.location.city}</b>
            </p>
            <p>
              <b>Email Id :</b> {x.email}
            </p>
            <p>
              <b>Contact :</b> {x.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
