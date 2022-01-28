import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { incrementAction, decrementAction} from "../redux/actions/counterActions";
import { decrement, increment } from "../redux/counterSlice";


function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handelIncrement = () => {
    dispatch(increment())
    // incrementAction(dispatch);
  };
  const handelDecrement = () => {
    dispatch(decrement())
    // decrementAction(dispatch);
  };
  // const handelIncByValue = (vl) => {
  //   incrementByValue(vl, dispatch);
  // };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
      {/* <button onClick={() => handelIncByValue(50)}>By Value</button> */}
    </div>
  );
}

export default Counter;
