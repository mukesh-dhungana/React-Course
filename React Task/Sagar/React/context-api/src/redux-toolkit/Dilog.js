import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Dilog = ({ open, setOpen, deleteHandler, userData }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          DELETE
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to <b>delete</b> <u>{userData.name}</u> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => deleteHandler()} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dilog;
