const { createStore } = require("redux");

//action
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";


const incrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  };
};
const decrementCount = () => {
  return {
    type: DECREMENT_COUNT,
  };
};


//reducer
const initialState = {
  count: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};


//store
const store = createStore(reducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(incrementCount());
unsubscribe();
