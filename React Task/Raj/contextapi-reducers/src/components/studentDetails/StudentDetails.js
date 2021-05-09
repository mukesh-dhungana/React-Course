import { useReducer } from "react";
import { StudentDetails } from "../Context";

const initialtate = {
  data: [
    { id: 1, name: "Raj", email: "xyz", phone: "2122222" },
    { id: 2, name: "Bunny", email: "xyz", phone: "2122222" },
  ],
};

export const DetailReducer = (state = initialtate, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, data: [...state.data, action.payload] };
      break;
    case "Delete":
      return {
        ...state,
        data: [...state.data.filter(x => x.id !== action.payload.id)],
      };
    case "Edit":
      return {
        ...state,
        data: [
          ...state.data.filter(x => x.id !== action.payload.id),
          action.payload,
        ],
      };
      break;
    default:
      return state;
  }
};

export const DetailProvider = props => {
  const [state, dispatch] = useReducer(DetailReducer, initialtate);
  return (
    <StudentDetails.Provider value={{ state, dispatch }}>
      {props.children}
    </StudentDetails.Provider>
  );
};
