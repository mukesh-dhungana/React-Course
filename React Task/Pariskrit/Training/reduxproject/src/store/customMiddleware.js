export const customMiddleware = (store) => (next) => (action) => {
  console.log("middleware");
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};
