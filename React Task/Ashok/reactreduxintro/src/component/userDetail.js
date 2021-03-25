import React from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { store } from "../Redux/store";
import "./style.css";

const useStyles = makeStyles({
  table: {
    Width: "200px",
    margin: "20px",
  },
});

function UserDetail() {
  const data = store?.getState()?.userReducer?.allUser;
  const classes = useStyles();

  return (
    <div>
      {data.length ? (
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.N </TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Completed</TableCell>
                <TableCell align="left">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>

                  <TableCell align="left">{"" + row.completed}</TableCell>
                  <TableCell align="left">{row.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>No any data to show</h2>
      )}
    </div>
  );
}

export default UserDetail;
