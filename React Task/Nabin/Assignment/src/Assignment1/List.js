import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function List({ data, deleteUser, number }) {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" aria-required>
                  <IconButton
                    aria-label="delete"
                    className="deleteButton"
                  >
                    <CheckIcon fontSize="large" />
                  </IconButton>
                </TableCell>

                <TableCell align="center" aria-required>
                  {row.name}
                </TableCell>

                <TableCell align="center" aria-required>
                  {row.address}
                </TableCell>

                <TableCell align="center" aria-required>
                  {row.number}
                </TableCell>
                
                <TableCell align="center" aria-required>
                  <IconButton
                    onClick={()=>deleteUser(row.id)}
                    aria-label="delete"
                    className="deleteButton"
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell>
                <TableCell align="center" aria-required>
                  <IconButton aria-label="delete" className="deleteButton">
                    <EditIcon fontSize="large" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
