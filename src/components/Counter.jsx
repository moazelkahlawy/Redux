import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/actions/types";

function Counter() {
  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handelIncrement = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const handelDecrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  return (
    <div>
      <p>{countState}</p>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
