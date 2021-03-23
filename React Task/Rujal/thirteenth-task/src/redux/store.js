import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

const customMiddleWare = (store) => (next) => (action) => typeof action === "function" ? action(store.dispatch) : next(action)
export const store = createStore(reducer, applyMiddleware(customMiddleWare))
