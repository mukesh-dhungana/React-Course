import { SET_LOGGEDIN_USER, IS_ERROR } from "./actionTypes";

const setLoggedInUser = (user) => {
  return {
    type: SET_LOGGEDIN_USER,
    payload: user,
  };
};

export const checkLogin = (loginData) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const isloginUserData = data.find(
          (fetchedUser) => fetchedUser.username === loginData.username
        );

        if (!isloginUserData) {
          throw new Error("incorrect username");
        }
        dispatch(setLoggedInUser(isloginUserData));
      })
      .catch((error) => dispatch({ type: IS_ERROR }));
  };
};
