import React, { useState, useRef } from "react";
import { DeleteTodo, EditTodo } from "../../Action/index";
import { useDispatch } from "react-redux";

const TodoItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const Ref = useRef(null);

  const form = () => (
    <>
      <h3 key={item.id}>
        {item.value}
        <button onClick={() => setShow(true)}>Edit</button>
        <button onClick={() => dispatch(DeleteTodo(item.id))}>Delete</button>
      </h3>
    </>
  );
  const editSubmit = e => {
    e.preventDefault();
    dispatch(EditTodo({ editData: Ref.current.value, id: item.id }));
    setShow(false);
    Ref.current.value = "";
  };

  const editForm = () => (
    <>
      <form onSubmit={editSubmit}>
        <input ref={Ref} type="text" defaultValue={item.value} />
        <input type="submit" />
      </form>
    </>
  );
  return <div>{show ? editForm() : form()}</div>;
};

export default TodoItem;
