const initialUsers = {
  users: [
    {
      id: 1,
      username: "john_smith",
      fullName: "John Smith",
      email: "john@test.com",
      address: "xyz street",
      role: "admin",
    },
    {
      id: 2,
      username: "mark_doe",
      fullName: "Mark Doe",
      email: "mark@test.com",
      address: "ABC street",
      role: "moderator",
    },
  ],
};

const reducer = (state, action) => {
  console.log("Reducer");
  const { type, payload } = action;

  switch (type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, payload],
      };
    
    case "DELETE_USER":
      console.log('Delete User', payload);
      return {
        ...state,
        users: [
          ...state.users.filter(user => user.id !== payload.id)
        ]
      }

    case "EDIT_USER":
      console.log('Edit User', payload);
      return {
        ...state,
        users: [
          ...state.users.map(user => (
            user.id === payload.id ? payload : user
          ))
        ]
      }
    default:
      break;
  }
};

export { initialUsers, reducer };
