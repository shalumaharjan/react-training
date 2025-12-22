import React, { useState } from "react";
import ParentComponent from "./ParentComponent";

const Counter = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    // setState(state + 1);
    setState((prevState) => prevState + 1); //prevState: previous State add
    setState((prevState) => prevState + 1); // output is incremented by 2
  };

  const decrement = () => {
    setState(state - 1);
  };

  return (
    <>
      <ParentComponent>
        <h1>Content</h1>
        {/* <Name></Name> */}
        <h1>{state}</h1>
        Increment <button onClick={increment}>+</button>
        <br />
        Decrement <button onClick={decrement}>-</button>
      </ParentComponent>
    </>
  );
};

export default Counter;
