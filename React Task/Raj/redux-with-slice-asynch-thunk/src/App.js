import "./App.css";
import { Home } from "./component/Home";
import { FetchSlice } from "./Fetch/fetchSlice";

function App() {
  return (
    <div className="App">
      <Home />
      <FetchSlice />
    </div>
  );
}

export default App;
