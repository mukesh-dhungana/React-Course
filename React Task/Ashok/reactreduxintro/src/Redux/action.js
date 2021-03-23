import { GET_ALL_USER, LOADING } from "./actiontypes";

export const getAllUserAction = (dispatch) => {
  dispatch(LoadingAction(true));
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_USER, payload: json }))
    .catch((err) => console.log(err))
    .finally(() => dispatch(LoadingAction(false)));
};

const LoadingAction = (isLoading) => ({
  type: LOADING,
  payload: isLoading,
});
