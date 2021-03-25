import React from "react";
import { setUsersCreator } from "../store/actions";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

function Users({ store }) {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const unSubscribe = store.subscribe(() => {
    setIsLoading(store.getState().loading);
  });

  React.useEffect(() => {
    store.dispatch(setUsersCreator());

    return () => unSubscribe();
  }, []);

  if (isLoading) {
    return <h1>LOADING....</h1>;
  }
  return (
    <div className="users">
      <Button color="primary" onClick={() => setUsers(store.getState().users)}>
        Display Users
      </Button>
      <List style={{ width: "60%", margin: "50px auto" }}>
        {users.map((user) => (
          <ListItem key={user.id} button>
            <ListItemAvatar>
              <Avatar alt={`1`} />
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Users;
