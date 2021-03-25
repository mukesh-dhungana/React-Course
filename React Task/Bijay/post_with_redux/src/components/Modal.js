import React from "react";
import "./Styles/Modal.css";

const Modal = ({toggleModal, deleteComment, comment}) => {

  return (
    <div className="modal-container">
      <div className="close">
        <i onClick={()=>toggleModal()} class="far fa-times-circle"></i>
      </div>
      <div className="modal-box">
        {/* <h1>This is Modal</h1> */}
        <div className="input-comment">
          <label htmlFor="">
            <input
              type="text"
              placeholder="Enter Comment"
              autoFocus="true"
            />
          </label>
        </div>
        <div className="buttons">
          <p>
            <i onClick={()=>toggleModal()} className="fas fa-check-circle edit"></i>
          </p>
          <p>
            <i onClick={()=> {
                deleteComment(comment.id)
                toggleModal();
            } } className="fas fa-trash delete"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
