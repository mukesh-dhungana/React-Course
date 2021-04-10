import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./component/Config";
import { Provider } from "react-redux";
import Signup from "./component/Signup";
const store = configureStore({
  reducer: myReducer,
});

function App() {
  return (
    <div>
      <Provider store={store}>
        <Signup />
      </Provider>
      ;
    </div>
  );
}

export default App;
