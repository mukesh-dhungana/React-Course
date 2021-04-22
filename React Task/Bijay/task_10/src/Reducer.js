import { render } from "react-dom";
import { createStore } from "redux";

const initialState = {
    jokes: ''
};

//** TYPES */
const VIEW_USERS = "VIEW_USERS";

//** ACTIONS */
const viewAction = {
  type: VIEW_USERS,
  payload: "View Users List",
};

//**ACTIONS CREATOR */
const viewActionCreator = () => {
  return viewAction;
//?  return {
// ?    type: VIEW_USERS,
//  ?   payload: "View Users List",
//  ? };
};

//***REDUCER LOGICS */
const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_USERS:
      console.log("This is to view list of Users");
      return {
        ...state,
        jokes: action.payload
      };

    default:
      return state
  }
};

//** STORE with Redux */
export const store = createStore(viewReducer)
 //? Subscribe to redraw whenever the data changes in the future
 store.subscribe()
console.log(store.getState());