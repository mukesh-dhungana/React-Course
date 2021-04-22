import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function Todolists({ todos, deleteTodo, setValue, setIndexOfTodo }) {
  return todos.map((todo, index) => (
    <Card className="card" key={todo}>
      <CardContent className="card__content">
        <p>{todo}</p>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteTodo(index)}>Delete</Button>
        <Button
          onClick={() => {
            setValue(todo);
            setIndexOfTodo(index);
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  ));
}

export default Todolists;
