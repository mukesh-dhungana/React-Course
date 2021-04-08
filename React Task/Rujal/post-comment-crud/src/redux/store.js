import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const persistedState = loadState();

const middleware = store => next => action => typeof action === "function" ? action(store.dispatch) : next(action)
const enhanceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, persistedState, enhanceCompose(applyMiddleware(middleware)))

store.subscribe(() => saveState(store.getState()))