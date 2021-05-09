import "./App.css";
import { Signup } from "./components/Signup";
import { Profile } from "./components/Profile";
import { useSelector } from "react-redux";

function App() {
  const selector = useSelector(state => state.data);
  return <div className="App">{selector ? <Profile /> : <Signup />}</div>;
}

export default App;
