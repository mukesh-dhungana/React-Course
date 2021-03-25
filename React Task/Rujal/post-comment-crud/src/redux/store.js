import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'

const middleware = store => next => action => typeof action === "function" ? action(store.dispatch) : next(action)
const enhanceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

export const store = createStore(reducer, enhanceCompose(applyMiddleware(middleware)))