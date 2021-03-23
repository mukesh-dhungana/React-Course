import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./users.css";
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  withRouter,
} from "react-router-dom";

import UpdateModal from "./UpdateModal";

function SelectedUser(props) {
  const { dispatch, location, match } = props;
  const history = useHistory();
  const [selectedUser, setSelectedUser] = React.useState(location.state);
  const { username, address } = selectedUser;

  return (
    <>
      <Card className="card">
        <CardContent>
          <p>
            <b>Name: </b>
            {username}
          </p>

          <p>
            <b>Address: </b>
            {address}
          </p>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            className="editbutton"
            onClick={() => history.push(`${match.url}/edit`)}
          >
            Edit
          </Button>
        </CardActions>
      </Card>

      <Switch>
        <Route
          path={`${match.path}/edit`}
          render={() => <UpdateModal user={selectedUser} dispatch={dispatch} />}
        />
      </Switch>
    </>
  );
}

export default withRouter(SelectedUser);
