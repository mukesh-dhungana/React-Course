import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserPassword } from "../redux/reducer";

function Profile() {
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);
  const updated = useSelector((state) => state.updated);
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = React.useState(user);
  const [showForm, setShowForm] = React.useState(false);

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    dispatch(updateUserPassword(newPassword));
  };
  return (
    <div>
      <h1>Profile</h1>
      <div style={{ margin: "30px 0" }}>
        <p>
          <b>Username:</b>
          {user.username}
        </p>
        <p>
          <b>Password:</b>
          {user.password}
        </p>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className="button"
          onClick={() => setShowForm(true)}
        >
          Edit
        </Button>
      </div>
      {showForm && (
        <div className="editform">
          <form onSubmit={handleUpdatePassword}>
            <TextField
              type="text"
              label="Password"
              value={newPassword.password}
              onChange={(e) =>
                setNewPassword({ ...newPassword, password: e.target.value })
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="button"
            >
              Submit
            </Button>
          </form>
          {error && <h1 style={{ color: "red" }}>Error!! No User Present</h1>}
          {updated && <h1 style={{ color: "green" }}>Succesfully Updated!!</h1>}
        </div>
      )}
    </div>
  );
}

export default Profile;
