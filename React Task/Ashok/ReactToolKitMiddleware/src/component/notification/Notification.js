import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Notification({ open, handleClose, message, severity }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MuiAlert
        onClose={handleClose}
        severity={severity ? "error" : "success"}
        elevation={6}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default Notification;
