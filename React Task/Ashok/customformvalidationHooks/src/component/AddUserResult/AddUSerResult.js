import { Modal } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { ADD_USER_RESULT, EDIT_USER_RESULT } from "../../action/actionTypes";

import { StudentResult } from "../../context/studentResult.context";
// import "./style.css";

function AdduserResult({ result, type, id, primary }) {
  const [user, setUser] = useState(result);
  const [openModal, setopenModal] = useState(false);

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

  const handleNewUSERRESULTSBUMIT = (e) => {
    e.preventDefault();

    type === "Add" &&
      dispatchResult({
        type: ADD_USER_RESULT,
        payload: {
          id,
          result: {
            ...user,
            id: Date.now(),
          },
        },
      });

    type === "Edit" &&
      dispatchResult({
        type: EDIT_USER_RESULT,
        payload: { result: { ...user }, id: id },
      });
    e.target.reset();
    setopenModal(false);
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={handleAddUserModal} className={primary}>
          {type} user Result
        </button>
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
            <form onSubmit={handleNewUSERRESULTSBUMIT} className="form">
              <h4 style={{ textAlign: "center" }}>{type} user Result</h4>
              Sem:
              <input
                type="text"
                onChange={handleChange}
                name="sem"
                value={user.sem}
              />
              Gpa:
              <input
                type="text"
                onChange={handleChange}
                name="gpa"
                value={user.gpa}
              />
              <button type="submit">{type.toUpperCase()} USER Result</button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default AdduserResult;
