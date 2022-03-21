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
export const registerStatus = () => ({ type: "registerStatus" });

export const setToken = (token) => ({
  type: "setToken",
  payload: { player: token },
});

function reducer(state = initialState, action) {
  if (action.type === "registerStatus") {
    return produce(state, (draft) => {
      draft.status = !draft.status;
      localStorage.setItem("signUpUser_status_boolean", draft.status);
    });
  }

  if (action.type === "setToken") {
    return produce(state, (draft) => {
      const access_token = localStorage.getItem("access_token");
      localStorage.setItem("access_token_redux", access_token);
      localStorage.removeItem("access_token");
    });
  }

  return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
