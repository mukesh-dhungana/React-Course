export const customMiddleware = (store) => (next) => (action) => {
  const fetchAPI = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (
      data.find((d) => d.username === action.payload.name) ||
      action.type === "data/editPass"
    ) {
      return next({ type: "data/setError" });
    } else {
      return next({ type: "data/error" });
    }
  };

  fetchAPI();

  return next(action);
};
