import { combineReducers } from 'redux';
import postReducer from './postReducer'

// console.log(postReducer);

export default combineReducers({
    postData: postReducer,

})