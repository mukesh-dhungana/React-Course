import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Modal } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { editUser, removeUser } from "../../redux/photoReducerSlice";

import "./style.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {},
  Paper: {
    width: "90%",
    margin: "20px auto",
  },
  form: {
    position: "absolute",
    top: "10%",
    left: "40%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
});

export default function UserTable({ users }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleUserData, setSingleUserData] = useState({});
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUserDelete = (id) => {
    dispatch(removeUser(id));
  };

  const handleUserEdit = (id, username, street, lat, lng, phone, name) => {
    setSingleUserData({ id, username, street, lat, lng, phone, name });
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const { id, username, street, lat, lng, phone, name } = singleUserData;
    dispatch(
      editUser({
        id,
        username,
        address: {
          street,
          geo: {
            lat,
            lng,
          },
        },
        phone,
        company: {
          name,
        },
      })
    );
    setIsModalOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Geolocation</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">Company</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(
              ({
                id,
                username,
                address: {
                  street,
                  geo: { lat, lng },
                },
                phone,
                company: { name },
              }) => (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{street}</StyledTableCell>
                  <StyledTableCell align="right">
                    {`${lat}-${lng}`}
                  </StyledTableCell>
                  <StyledTableCell align="right">{phone}</StyledTableCell>
                  <StyledTableCell align="right">{name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleUserEdit(
                          id,
                          username,
                          street,
                          lat,
                          lng,
                          phone,
                          name
                        )
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleUserDelete(id)}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <form className={classes.form} onSubmit={handleEditFormSubmit}>
            <h4>Edit your profiile</h4>
            Username:
            <input
              type="text"
              onChange={handleChange}
              name="username"
              value={singleUserData.username}
            />
            Street:
            <input
              type="text"
              onChange={handleChange}
              name="street"
              value={singleUserData.street}
            />
            Latitude:
            <input
              type="text"
              onChange={handleChange}
              name="lat"
              value={singleUserData.lat}
            />
            Longitude:
            <input
              type="text"
              onChange={handleChange}
              name="lng"
              value={singleUserData.lng}
            />
            Phone:{" "}
            <input
              type="text"
              onChange={handleChange}
              name="phone"
              value={singleUserData.phone}
            />
            Company:
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={singleUserData.name}
            />
            <button type="submit">Edit</button>
          </form>
        </Modal>
      )}
    </>
  );
}
