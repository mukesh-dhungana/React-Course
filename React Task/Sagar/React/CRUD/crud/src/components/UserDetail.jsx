import React from "react";
import { useHistory } from "react-router-dom";

const UserDetail = (props) => {
  const user = props.state.find((_, i) => i === +props.match.params.id);

  const history = useHistory();

  const [value, setValue] = React.useState(user);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => (
          props.dispatch({
            type: "EDIT",
            payload: value,
            id: +props.match.params.id,
          }),
          history.push("/user")
        )}
      >
        Edit
      </button>
    </div>
  );
};

export default UserDetail;
