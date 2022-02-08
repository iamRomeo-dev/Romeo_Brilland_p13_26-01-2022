import { createStore } from "redux";

// state
const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
};

// actions creators

export const playPause = () => ({ type: "playPause" });

function reducer(state = initialState, action) {
  if (action.type === "playPause") {
    if (state.winner) {
      return state;
    }
    return {
      ...state,
      playing: !state.playing,
    };
  }

  return state;
}

export const store = createStore(reducer);
