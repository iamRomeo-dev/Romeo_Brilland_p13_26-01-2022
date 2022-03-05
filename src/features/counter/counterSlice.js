import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "jean",
  age: 30,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    getContacts: (state) => {
      return state.value;
    },
    changeName: (state) => {
      console.log("tototo");
      return { ...state, name: "toto" };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getContacts, changeName } = counterSlice.actions;

export default counterSlice.reducer;
