import { useEffect, useState } from "react";
import UserDetail from "./component/userDetail";
import { getAllUserAction } from "./Redux/action";
import { store } from "./Redux/store";
import "./App.css";

function App() {
  const [view, setview] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    store.dispatch(
      getAllUserAction("https://jsonplaceholder.typicode.com/todos")
    );
  }, []);

  store.subscribe(() => {
    setLoading(store.getState().userReducer.isloaDING);
  });

  return (
    <div className="App">
      {isLoading ? (
        <h1>LOading...</h1>
      ) : (
        <>
          <button onClick={() => setview(!view)}>View Details</button>
          <button
            onClick={() =>
              store.dispatch(
                getAllUserAction(
                  "https://jsonplaceholder.typicode.com/todos/?_limit=2"
                )
              )
            }
          >
            {" "}
            New data
          </button>
        </>
      )}

      {view && <UserDetail />}
    </div>
  );
}

export default App;
