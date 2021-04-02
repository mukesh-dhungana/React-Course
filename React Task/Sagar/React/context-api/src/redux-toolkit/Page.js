import React, { useState } from "react";
import Form from "./Form";
import ShowData from "./ShowData";
import { add, editValue } from "./slice/slice";
import { useDispatch, useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "85%",
    margin: "30px auto",
  },
}));

const Page = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.list);

  const classes = useStyles();

  //States
  const [value, setValue] = useState({
    id: 0,
    name: "",
    phone: "",
  });

  const [edit, setEdit] = useState(false);

  const { id, name, phone } = value;

  let maxId = [];

  React.useEffect(() => {
    selector.map((u) => maxId.push(u.id));
  });

  //Handler
  const submitHandler = () => {
    if (name !== "" && phone !== "") {
      if (edit) {
        console.log("edit");
        dispatch(editValue({ id, name, phone }));
        setValue({ name: "", phone: "", id: Math.max(...maxId) + 1 });
        console.log(maxId);
        setEdit(false);
      } else {
        dispatch(add({ id, name, phone }));
        setValue({ name: "", phone: "", id: id + 1 });
      }
    }
  };

  return (
    <Container className={classes.container}>
      <Form value={value} setValue={setValue} submitHandler={submitHandler} />
      <ShowData
        selector={selector}
        dispatch={dispatch}
        setValue={setValue}
        setEdit={setEdit}
      />
    </Container>
  );
};

export default Page;
