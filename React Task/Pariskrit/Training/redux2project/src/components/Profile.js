import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";

function Profile(props) {
  return (
    <Paper
      className="profile"
      elevation="3"
      style={{
        display: "flex",
        alignItems: "center",
        width: "50%",
        margin: "auto",
        padding: "20px",
        justifyContent: "space-around",
      }}
    >
      <Avatar style={{ width: "100px !important", height: "100px !important" }}>
        H
      </Avatar>
      <div className="user__content">
        <p>
          <b>Name: </b>
          {props.user.name}
        </p>
        <p>
          <b>Phone: </b>
          {props.user.phone}
        </p>
        <p>
          <b>email: </b>
          {props.user.email}
        </p>
      </div>
    </Paper>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Profile);
