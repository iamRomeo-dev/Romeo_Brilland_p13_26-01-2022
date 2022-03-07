import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpUser_status: 0,
  access_token_boolean: false,
};

export const counterSlice = createSlice({
  name: "controlAuthentification",
  initialState,

  reducers: {
    getContacts: (state) => {
      return state.value;
    },
    setSignUp: (state) => {
      console.log(initialState);
      return { ...state, signUpUser_status: 200 };
    },

    setLogIn: (state) => {
      console.log(initialState);
      return { ...state, access_token_boolean: !state.access_token_boolean };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getContacts, setSignUp, setLogIn } = counterSlice.actions;

export default counterSlice.reducer;
