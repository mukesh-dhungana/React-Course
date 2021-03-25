//actions

const { createStore, combineReducers, applyMiddleware } = require("redux");

//actions type
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const SET_USERS = "SET_USERS";

const incrementCountAction = {
  type: INCREMENT_COUNT,
};

const incrementCountActionCreater = () => {
  console.log("action executed");
  return incrementCountAction;
};

//reducer

const initialCountState = {
  count: 0,
};

const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      console.log("reducer executed");
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

//user reducer
const initialUserState = {
  users: [],
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: [{ id: 1, name: "Mahesh" }],
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  countReducer,
  userReducer,
});

const middleware = (store) => (next) => (action) => {
  console.log("middleware executed");
  if(true)
  return 
  return next(action);
};
//store
const store = createStore(rootReducer, applyMiddleware(middleware));
//console.log(store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated", store.getState())
);
store.dispatch(incrementCountActionCreater());
