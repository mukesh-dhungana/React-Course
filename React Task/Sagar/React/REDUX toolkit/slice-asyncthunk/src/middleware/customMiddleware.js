// export const customMiddleware = (store) => {
//   return (next) => (action) => {
//     const fetchAPI = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       console.log("running");
//       if (action.type === "data/add") {
//         console.log(data);
//         if (!data.find((d) => d.username === action.payload.name)) {
//           return next({ type: "data/error" });
//         } else {
//           return next({ type: "data/setError" });
//         }
//       } else {
//         return next(action);
//       }
//     };

//     fetchAPI();

//     const returnValue = next(action);

//     return returnValue;
//   };
// };
export const customMiddleware = (store) => (next) => (action) => {
  debugger;
  const fetchAPI = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    
    if (
      data.find((d) => d.username === action.payload.name) ||
      action.type === "data/add"
    ) {
      return next(action);
    } else {
      return next({ type: "data/error" });
    }
  };

  fetchAPI();
  return next(action);
};
