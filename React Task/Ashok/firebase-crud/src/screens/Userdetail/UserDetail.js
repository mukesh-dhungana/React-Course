import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import "./style.css";

function UserDetail(props) {
  console.log(props.location);
  const { state } = props?.location;

  const [isModelOPen, setModel] = useState(false);

  const handleEdit = () => {
    setModel(true);
  };

  const handleCloseModel = () => {
    setModel(false);
  };

  return (
    <div class="card" style={{ maxWidth: "90%", margin: "20px auto" }}>
      <img class="card-img-top" src={state.photoUrl} alt="Card  cap" />
      <div class="card-body">
        <h5 class="card-title">{state?.username}'s profile</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email : {state.email}</li>
        <li class="list-group-item">Address: {state.address}</li>
      </ul>
      <div class="card-body">
        <button className="btn btn-info" onClick={handleEdit}>
          Edit Details
        </button>
      </div>
      {isModelOPen && (
        <Modal
          open={isModelOPen}
          onClose={handleCloseModel}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="model-body">
            <h3>Edit {state.username}'s profile</h3>
            <UserForm actionType="Edit" user={state} />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UserDetail;
