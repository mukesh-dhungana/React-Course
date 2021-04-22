export const FETCH_USERS = "FETCH_USERS";
export const IS_LOADING = "IS_LOADING";

const setUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};

const setIsLoading = () => {
  return {
    type: IS_LOADING,
  };
};

export const setUsersCreator = (dispatch) => {
  return (dispatch) => {
    console.log(dispatch);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setUsers(data));
          dispatch(setIsLoading());
        });
    }, 1000);
  };
};
