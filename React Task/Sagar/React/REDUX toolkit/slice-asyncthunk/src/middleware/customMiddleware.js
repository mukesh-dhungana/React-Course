export const customMiddleware = (store) => {
  return (next) => (action) => {
    const fetchAPI = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      if (action.type === "data/add") {
        console.log(data);
        if (!data.find((d) => d.username === action.payload.name)) {
          return store.dispatch({ type: "data/error" });
        } else {
          return next({ type: "data/setError" });
        }
      } else {
        next(action);
      }
    };

    fetchAPI();

    const returnValue = next(action);

    return returnValue;
  };
};
