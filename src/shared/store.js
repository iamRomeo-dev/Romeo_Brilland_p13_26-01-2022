import { createStore } from "redux";
import produce from "immer";

// state
const initialState = {};

function reducer(state = initialState, action) {}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
