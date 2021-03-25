import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
const middleware = store => next => action => typeof action === "function" ? action(store.dispatch) : next(action)
export const store = createStore(reducer, applyMiddleware(middleware))