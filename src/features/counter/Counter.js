import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./counterSlice";
// import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <div>
        <p>name:{count.name}</p>
        <p>age:{count.age}</p>
      </div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(changeName())}
      >
        Increment
      </button>
    </div>
  );
}
