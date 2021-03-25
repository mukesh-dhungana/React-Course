import { createStore } from "redux";
import { countReducer } from "./reducer";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer);
//store.subscribe(() => console.log("state upated", store.getState()));
export default store;


