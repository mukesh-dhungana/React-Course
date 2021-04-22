export const initialState = {
  userList: [
    { id: 1, username: "John", address: "kathmandu" },
    { id: 2, username: "Alex", address: "Pokhara" },
    { id: 3, username: "Hugh", address: "Biratnagar" },
    { id: 4, username: "Sures", address: "Dharan" },
    { id: 5, username: "Anish", address: "Dhangadhi" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        userList: state.userList.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        userList: [...state.userList.filter(({ id }) => id !== action.id)],
      };

    case "ADD_USER":
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    default:
      return state;
  }
};
