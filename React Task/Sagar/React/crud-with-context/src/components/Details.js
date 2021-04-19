import React, { useContext } from "react";
import { studentDetails } from "../Provider/StudentDetails";
import { studentResults } from "../Provider/StudentResult";

//Material-UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//Custom Css
const useStyles = makeStyles({
  paper: {
    margin: "auto",
    marginTop: 20,
    width: 600,
    padding: 10,
    marginBottom: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Details = ({ setDetailValue, setResultValue, setEdit }) => {
  //Context Consumer
  const studentDetail = useContext(studentDetails);
  const studentResult = useContext(studentResults);

  //Destructuring ContextAPI values
  const { detailDispatch, detailState } = studentDetail;
  const { resultDispatch, resultState } = studentResult;

  //DeleteHandler
  const deleteHandler = (id) => {
    detailDispatch({ type: "DELETE", payload: id });
    resultDispatch({ type: "DELETE", payload: id });
  };

  //EDIT Handler
  const editHandler = (s) => {
    setEdit(true);
    setDetailValue(s);

    const res = resultState?.studentSemResult?.find(
      (r) => r.studentId === s.id
    );
    const result = res?.result;

    res &&
      setResultValue({
        first: result[0].gpa || "",
        second: result[1].gpa || "",
        third: result[2].gpa || "",
        fourth: result[3].gpa || "",
      });
  };

  //Custom Css

  const student = detailState?.students?.reverse();
  const classes = useStyles();

  return (
    <div>
      {detailState &&
        student.map((student) => (
          <Paper key={student.id} className={classes.paper}>
            <Grid className={classes.flex}>
              <div>
                <ButtonGroup>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => editHandler(student)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteHandler(student.id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
              <div>
                <Typography>
                  <b>Name : </b> {student.name}
                </Typography>
                <Typography>
                  <b>Email : </b> {student.email}
                </Typography>
                <Typography>
                  <b>Phone : </b> {student.phone}
                </Typography>
              </div>

              <div>
                {resultState
                  ? resultState.studentSemResult.map((result) =>
                      result.studentId === student.id ? (
                        <div key={result.studentId}>
                          <h3>
                            <u>Result</u>
                          </h3>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() =>
                              resultDispatch({
                                type: "DELETE",
                                payload: result.studentId,
                              })
                            }
                          >
                            Delete Result
                          </Button>
                          {result.result.map((sem) => (
                            <div key={sem.id}>
                              <b>{sem.sem} : </b>
                              {sem.gpa}
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </div>
            </Grid>
          </Paper>
        ))}
    </div>
  );
};

export default Details;
