import { GET_ALL_USER, REMOVE_ALL_USER } from "./actiontypes";

export const getAllUserAction = (url) => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_USER, payload: json }))
    .catch((err) => console.log(err));
};

export const removeAllUserAction = () => ({
  type: REMOVE_ALL_USER,
});
