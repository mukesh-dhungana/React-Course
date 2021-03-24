import { FETCH_USERS, IS_LOADING } from "./actions";

export const initialState = {
  users: [],
  loading: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case IS_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
