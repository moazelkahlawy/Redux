import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction, incrementByValue} from "../redux/actions/counterActions";


function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handelIncrement = () => {
    incrementAction(dispatch);
  };
  const handelDecrement = () => {
    decrementAction(dispatch);
  };
  const handelIncByValue = (vl) => {
    incrementByValue(vl, dispatch);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
      <button onClick={() => handelIncByValue(50)}>By Value</button>
    </div>
  );
}

export default Counter;
