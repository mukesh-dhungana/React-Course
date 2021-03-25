import "./App.css";
import { useEffect, useState } from "react";
import { showData } from "./actions/action";
import { store } from "./store/store";
import Spinner from "./spinner animation/spinner";

function App() {
  const [apiValue, setApiValue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function APIcall() {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const data = await response.json();
      store.dispatch(showData(data.results));
      setApiValue(store.getState().data);
      setLoading(false);
    }
    APIcall();
  }, []);

  console.log("app", store.getState().data);

  return (
    <div className="App">
      {loading ? (
        <div className="load">
          <Spinner />
        </div>
      ) : (
        <ul className="list">
          {apiValue.map((user) => (
            <li style={{ listStyle: "none" }}>{user.name.first}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
