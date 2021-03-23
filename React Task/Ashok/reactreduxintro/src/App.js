import { useEffect, useState } from "react";
import UserDetail from "./component/userDetail";
import { getAllUserAction } from "./Redux/action";
import { store } from "./Redux/store";
import "./App.css";

function App() {
  const [view, setview] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    store.dispatch(getAllUserAction);
  }, []);

  store.subscribe(() => {
    setLoading(store.getState().userReducer.isloaDING);
  });

  return (
    <div className="App">
      {isLoading ? (
        <h1>LOading...</h1>
      ) : (
        <button onClick={() => setview(!view)}>View Details</button>
      )}

      {view && <UserDetail />}
    </div>
  );
}

export default App;
