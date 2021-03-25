import { GET_ALL_USER, LOADING } from "./actiontypes";

export const getAllUserAction = (url) => (dispatch) => {
  dispatch(LoadingAction(true));
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_USER, payload: json }))
    .catch((err) => console.log(err))
    .finally(() => dispatch(LoadingAction(false)));
};

const LoadingAction = (isLoading) => ({
  type: LOADING,
  payload: isLoading,
});
