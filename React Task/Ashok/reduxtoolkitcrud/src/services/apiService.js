export const httpCall = (url, method = "GET", signal = null) => {
  return fetch(url, { method, signal });
};
