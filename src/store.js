import produce from "immer";
import { createStore } from "redux";

// state
const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  status: false,
  history: [],
};

// actions creators
console.log("initialState", initialState);

export const playPause = () => ({ type: "playPause" });

function reducer(state = initialState, action) {
  if (action.type === "playPause") {
    return produce(state, (draft) => {
      draft.status = !draft.status;
      localStorage.setItem("signUpUser_status_boolean", draft.status);
    });
  }
  return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
