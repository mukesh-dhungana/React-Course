import { Redirect } from "react-router";

export const useCheckUserLogin = (user) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return null;
};
