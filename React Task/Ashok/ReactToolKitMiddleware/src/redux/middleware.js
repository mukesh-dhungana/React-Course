import { error } from "./userSlice";

const getApiData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

export const userCheckMiddleWare = (store) => (next) => async (action) => {
  //if (action.type === "user/updateUser") {

  debugger;
  const usersData = await getApiData();
  const user = usersData.find(
    (item) => item.username === store.getState().userReducer.userData.username
  );
  if (user || action.type === "user/register") {
    return next(action);
  } else {
    return next(error());
  }
  // } else {
  //   return next(action);
  // }
};
