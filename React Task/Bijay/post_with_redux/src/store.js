import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {initalState} from './reducers/postReducer'
// import postReducer from './reducers/postReducer'


  const middleware = [thunk]

  const store = createStore(rootReducer, initalState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  export default store;