import { Modal } from "@material-ui/core";
import React, { useContext, useState } from "react";
import {
  ADD_USER,
  EDIT_USER,
  REGISTER_USER_RESULT_FROM_NEW_USER,
} from "../../action/actionTypes";
import { StudentInfoContext } from "../../context/studentInfo.conext";
import { StudentResult } from "../../context/studentResult.context";
import "./style.css";

function Adduser({ student, type }) {
  const [user, setUser] = useState(student);
  const [openModal, setopenModal] = useState(false);

  const [, dispatchInfo] = useContext(StudentInfoContext);
  const [, dispatchResult] = useContext(StudentResult);

  const handleAddUserModal = () => {
    setopenModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setopenModal(false);
  };

  const handleNewUSerSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    if (type === "Add") {
      dispatchInfo({ type: ADD_USER, payload: { ...user, id: id } });
      dispatchResult({
        type: REGISTER_USER_RESULT_FROM_NEW_USER,
        payload: { id: Date.now(), studentId: id, result: [] },
      });
    }
    type === "Edit" && dispatchInfo({ type: EDIT_USER, payload: { ...user } });
    setopenModal(false);
    e.target.reset();
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={handleAddUserModal}>{type} user</button>
      </div>
      {openModal && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div>
            {" "}
            <form onSubmit={handleNewUSerSubmit} className="form">
              <h4 style={{ textAlign: "center" }}>{type} user</h4>
              Name:
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={user.name}
              />
              Email:
              <input
                type="text"
                onChange={handleChange}
                name="email"
                value={user.email}
              />
              Phone:
              <input
                type="text"
                onChange={handleChange}
                name="phone"
                value={user.phone}
              />
              <button type="submit">{type.toUpperCase()} USER</button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Adduser;
