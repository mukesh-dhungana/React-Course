import React from "react";

import List from "@material-ui/core/List";
import User from "./User";
import "./users.css";

import AddIcon from "@material-ui/icons/Add";
import AddModal from "./AddModal";

function Users({ userList, dispatch }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="icon">
        <AddIcon className="addicon" onClick={() => setShowModal(true)} />
      </div>
      <List component="nav" aria-label="contacts" className="list">
        {userList.map((user, index) => (
          <User key={user.id} user={user} index={index} dispatch={dispatch} />
        ))}
      </List>
      {showModal && (
        <AddModal dispatch={dispatch} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default Users;
