import "./App.css";
import { Provider } from "./component/Provider";
import { Users } from "./component/Users";

function App() {
  return (
    <div className="App">
      <Provider>
        <Users />
      </Provider>
    </div>
  );
}

export default App;
