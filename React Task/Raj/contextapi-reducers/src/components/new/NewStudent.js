import React, { useContext, useState } from "react";
import cuid from "cuid";
import "./newStudents.css";
import { StudentDetails, StudentResults } from "../Context";
import { Button, TextField } from "@material-ui/core";

export const NewStudent = () => {
  const { state, dispatch } = useContext(StudentDetails);
  const { state2, dispatch2 } = useContext(StudentResults);

  const [data, setData] = useState({
    name: "",
    email: "",
    bol: false,
    id: "",
    phone: "",
  });
  const { name, email, bol, phone, id } = data;
  const [results, setResults] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    ids: "",
  });

  const { first, second, third, fourth, ids } = results;

  const handleChange = (name, e) => {
    setData({ ...data, [name]: e.target.value });
    setResults({ ...results, [name]: e.target.value });
  };
  const handleSubmit = e => {
    const cid = cuid();
    e.preventDefault();
    if (!bol) {
      dispatch({ type: "ADD", payload: { id: cid, name, email, phone } });
      dispatch2({
        type: "Add",
        payload: {
          id: cid,
          studentId: cid,
          results: [
            { id: 1, sem: "first", gpa: first },
            { id: 2, sem: "second", gpa: second },
            { id: 3, sem: "third", gpa: third },
            { id: 4, sem: "fourth", gpa: fourth },
          ],
        },
      });
      setData({ name: "", email: "", phone: "" });
      setResults({ first: "", second: "", third: "", fourth: "" });
    } else {
      dispatch({ type: "Edit", payload: { name, email, phone, id } });

      dispatch2({
        type: "Edit",
        payload: {
          id: ids,
          studentId: ids,
          results: [
            { id: 1, sem: "first", gpa: first },
            { id: 2, sem: "second", gpa: second },
            { id: 3, sem: "third", gpa: third },
            { id: 4, sem: "fourth", gpa: fourth },
          ],
        },
      });
      setData({ name: "", email: "", phone: "" });
      setResults({ first: "", second: "", third: "", fourth: "" });
    }
  };

  const form = () => (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          onChange={e => handleChange("name", e)}
          required
          label="Name"
          value={name}
        />
        <TextField
          type="text"
          onChange={e => handleChange("email", e)}
          required
          label="Email"
          value={email}
        />
        <TextField
          type="text"
          onChange={e => handleChange("phone", e)}
          required
          label="Phone"
          value={phone}
        />
        <TextField
          type="text"
          onChange={e => handleChange("first", e)}
          required
          label="First"
          value={first}
        />
        <TextField
          type="text"
          onChange={e => handleChange("second", e)}
          required
          label="Second"
          value={second}
        />
        <TextField
          type="text"
          onChange={e => handleChange("third", e)}
          required
          label="Third"
          value={third}
        />
        <TextField
          type="text"
          onChange={e => handleChange("fourth", e)}
          required
          label="Fourth"
          value={fourth}
        />
        <Button color="default" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );

  const delUser = ids => {
    dispatch2({
      type: "Delete",
      payload: { firstId: ids.resultId, secondId: ids.resultsId },
    });
  };

  const editData = ({ user }) => {
    const result = state2.result.find(x => x.id === user.id);
    const results = result.results;
    result &&
      setResults({
        first: results[0].gpa,
        second: results[1].gpa,
        third: results[2].gpa,
        fourth: results[3].gpa,
        ids: result.id,
      });
    setData({
      bol: true,
      name: user.name,
      email: user.email,
      phone: user.phone,
      id: user.id,
    });
  };

  const userDel = ({ userId }) => {
    dispatch({ type: "Delete", payload: { id: userId } });
    dispatch2({ type: "AllDelete", payload: { id: userId } });
  };
  const detailsmapping = () => (
    <div id="student">
      <div id="first">
        {form()}
        <br></br>
        {state.data.map(z => (
          <div key={z.id}>
            <span>{z.name}</span>
            <span> </span>
            <span>{z.email}</span>
            <span> </span>
            <span>{z.phone}</span>
            <button
              onClick={() => {
                const conf = window.confirm("Want to delete.?");
                if (conf) {
                  userDel({ userId: z.id });
                }
              }}
            >
              Delete
            </button>
            {<button onClick={() => editData({ user: z })}>Edit</button>}

            {state2.result.map(x =>
              x.results.map(y => (
                <div key={y.id}>
                  {x.id === z.id ? (
                    <>
                      <p>
                        <span>{`Semester : ${y.sem}`} and </span>
                        <span>{`GPA is : ${y.gpa}`}</span>
                      </p>
                      <button
                        onClick={() => {
                          const confm = window.confirm("Want to Delete.?");
                          if (confm) {
                            delUser({ resultId: x.id, resultsId: y.id });
                          }
                        }}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <p></p>
                  )}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
      <div id="second"></div>
      <div></div>
    </div>
  );
  return (
    <div>
      <h1>Students</h1>
      {detailsmapping()}
    </div>
  );
};
