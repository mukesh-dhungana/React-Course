import React from "react";
import { editPass } from "../slice/slice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import EditPass from "./EditPass";

const Profile = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.addUser);
  const errorSelector = useSelector((state) => state.error);

  const [show, setShow] = React.useState(true);
  const [showInput, setShowInput] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [password, setPassword] = React.useState(selector.pass);

  const handleClick = () => {
    if (errorSelector === true) {
      setError(true);
    } else {
      setError(false);
      dispatch(editPass({ pass: password }));
      setPassword("");
    }
  };

  setTimeout(() => {
    setShow(false);
  }, 3000);

  return (
    <div>
      {show ? (
        <p>
          You are now logged in as <b>{selector.name}.</b>
        </p>
      ) : (
        <p>
          Welcome <b>{selector.name}.</b>{" "}
        </p>
      )}

      <div>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => setShowInput(!showInput)}
        >
          Edit Password
        </Button>

        <div>
          {showInput ? (
            <EditPass
              setPassword={setPassword}
              password={password}
              handleClick={handleClick}
            />
          ) : (
            ""
          )}
        </div>

        {error === true ? (
          <p style={{ color: "red" }}>User doesn't match</p>
        ) : (
          ""
        )}
        {error === false ? (
          <p style={{ color: "green" }}>
            <b>Success!</b> Your password has been changed!
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
