import { createSlice } from "@reduxjs/toolkit";

const data = {
  id: 12,
  name: "RaZz Chaudhary",
  email: "craj68168@gmail.com",
  address: "Kathmandu Nepal",
  phone: "9860512866",
};
const slice = createSlice({
  name: "edit",
  initialState: data,
  reducers: {
    btnEdit: {
      reducer: (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.address = action.payload.address;
        state.phone = action.payload.phone;
      },
      prepare: ({ id, name, email, address, phone }) => {
        return {
          payload: {
            id,
            name,
            email,
            address,
            phone,
          },
        };
      },
    },
  },
});

export const { btnEdit } = slice.actions;
export default slice.reducer;
