import React from "react";
import { useHistory } from "react-router";

const Buttons = (props) => {

    const history = useHistory()

    const handleCancel = () => {
        console.log('Cancelled');
        history.push(props.path)
    }

  return (
    <div className="buttons-container">
      <button type="submit" className="btn btn-success">
        Submit
      </button>
      <button type="button" className="btn btn-outline-danger" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Buttons;
