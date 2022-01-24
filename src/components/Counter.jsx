import React, { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const handelIncrement = () => {
        setCount(count + 1)
    };
    const handelDecrement = () => {
        setCount(count - 1)
    };
    
  return (
    <div>
      <p>{count}</p>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
