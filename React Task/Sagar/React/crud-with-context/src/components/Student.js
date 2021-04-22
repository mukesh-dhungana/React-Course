import Form from "./Form";
import Details from "./Details";
import React, { useState } from "react";
import Container from "@material-ui/core/Container";

const Student = () => {
  //States
  const [detailValue, setDetailValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [resultValue, setResultValue] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  //Edit State
  const [edit, setEdit] = useState(false);

  return (
    <Container>
      <Form
        detailValue={detailValue}
        setDetailValue={setDetailValue}
        resultValue={resultValue}
        setResultValue={setResultValue}
        edit={edit}
        setEdit={setEdit}
      />
      <h1>Details :</h1>
      <Details
        setDetailValue={setDetailValue}
        setResultValue={setResultValue}
        setEdit={setEdit}
      />
    </Container>
  );
};

export default Student;
