import React, { useContext } from "react";
import { studentDetails } from "../Provider/StudentDetails";
import { studentResults } from "../Provider/StudentResult";

//Material-UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Form = ({
  detailValue,
  setDetailValue,
  resultValue,
  setResultValue,
  edit,
  setEdit,
}) => {
  //Context API
  const studentDetail = useContext(studentDetails);
  const studentResult = useContext(studentResults);

  const { detailDispatch, detailState } = studentDetail;
  const { resultDispatch, resultState } = studentResult;

  //Destructuring States
  const { name, email, phone } = detailValue;
  const { first, second, third, fourth } = resultValue;

  //Change Handler for Student Details
  const onDetailChangeHandler = (e, name) => {
    setDetailValue({
      ...detailValue,
      [name]: e.target.value,
    });
  };

  //Change Handler for Result
  const onResultChangeHandler = (e, name) => {
    setResultValue({
      ...resultValue,
      [name]: e.target.value,
    });
  };

  //On Button Click
  const onSubmitHandler = () => {
    if (!edit) {
      const random = Math.random() * 100;
      detailDispatch({
        type: "ADD",
        payload: { id: random, name, email, phone },
      });

      if (first !== "" || second !== "" || third !== "" || fourth !== "") {
        resultDispatch({
          type: "ADD",
          payload: {
            id: random,
            studentId: random,
            result: [
              { id: 1, sem: "First Sem", gpa: first },
              { id: 2, sem: "Second Sem", gpa: second },
              { id: 3, sem: "Third Sem", gpa: third },
              { id: 4, sem: "Fourth Sem", gpa: fourth },
            ],
          },
        });

        setResultValue({
          first: "",
          second: "",
          third: "",
          fourth: "",
        });
      }
      setDetailValue({
        name: "",
        email: "",
        phone: "",
      });
    } else {
      detailDispatch({
        type: "EDIT",
        payload: {
          detailValue,
        },
      });
      if (first !== "" || second !== "" || third !== "" || fourth !== "") {
        resultDispatch({
          type: "EDIT",
          payload: {
            id: detailValue.id,
            studentId: detailValue.id,
            result: [
              { id: 1, sem: "First Sem", gpa: first },
              { id: 2, sem: "Second Sem", gpa: second },
              { id: 3, sem: "Third Sem", gpa: third },
              { id: 4, sem: "Fourth Sem", gpa: fourth },
            ],
          },
        });
      }

      //   Resetting states
      setDetailValue({
        name: "",
        email: "",
        phone: "",
      });

      setResultValue({
        first: "",
        second: "",
        third: "",
        fourth: "",
      });
      setEdit(false);
    }
  };

  return (
    <div>
      Formm
      <form action="">
        <TextField
          variant="outlined"
          label="Name"
          onChange={(e) => onDetailChangeHandler(e, "name")}
          value={name}
        />
        <TextField
          variant="outlined"
          label="Email"
          onChange={(e) => onDetailChangeHandler(e, "email")}
          value={email}
        />
        <TextField
          variant="outlined"
          label="Phone"
          onChange={(e) => onDetailChangeHandler(e, "phone")}
          value={phone}
        />

        {/* Result */}
        <h3>Results : </h3>

        <TextField
          variant="outlined"
          label="First Sem GPA"
          onChange={(e) => onResultChangeHandler(e, "first")}
          value={first}
        />
        <TextField
          variant="outlined"
          label="Second Sem GPA"
          onChange={(e) => onResultChangeHandler(e, "second")}
          value={second}
        />
        <TextField
          variant="outlined"
          label="Third Sem GPA"
          onChange={(e) => onResultChangeHandler(e, "third")}
          value={third}
        />
        <TextField
          variant="outlined"
          label="Foutrh Sem GPA"
          onChange={(e) => onResultChangeHandler(e, "fourth")}
          value={fourth}
        />

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSubmitHandler()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
