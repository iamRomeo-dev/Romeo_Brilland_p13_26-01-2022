import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignUp } from "./counterSlice";
// import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.controlAuthentification);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <div>
        <p>name:{count.signUpUser_status}</p>
        <p>access_token_boolean:{console.log(count.access_token_boolean)}</p>
      </div>
      <button aria-label="Increment value">Increment</button>
    </div>
  );
}
