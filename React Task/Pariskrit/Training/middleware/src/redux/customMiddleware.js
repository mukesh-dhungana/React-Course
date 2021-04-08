export const customMiddleware = (storeApi) => (next) => (action) => {
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (!data.find((user) => user.username === action.payload.username)) {
      return next({ type: "users/error" });
    } else {
      return next(action);
    }
  };

  if (action.type !== "users/registerUser") {
    fetchUsers();
  } else {
    return next(action);
  }
};
