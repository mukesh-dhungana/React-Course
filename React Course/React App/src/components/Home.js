import React from "react";
import { useHistory, Link } from "react-router-dom";
import Hoc from "./Hoc";

function Home(props) {
  console.log(props)
  const history = useHistory();
  const users = [
    { id: 1, name: "Mark" },
    { id: 2, name: "David" },
    { id: 3, name: "Daneil" },
  ];
  return (
    <div>
      This is home page for {props.name}
      <Link to={{ pathname: "/about", state: { title: "My About Page" } }}>
        <h4> Go to about page</h4>
      </Link>
      <a href="/about">dsd</a>
      <input ref={props.newRef} />
      <button onClick={() => history.push("/about")}>Go to About page</button>
      {users.map((x) => {
        return (
          <Link to={{ pathname: `/user/${x.id}`, state: { ...x } }}>
            <h4>This is {x.name} user</h4>
          </Link>
        );
      })}
    </div>
  );
}

export default Hoc()(Home);
