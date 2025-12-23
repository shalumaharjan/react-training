import React, { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   console.log("Counter component mounted");
  // }, []);

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

//useEffect: runs 1 time in initial (fetch)
// dependencies: pass [] -> useEffecct load only in the first initial load
// useEffect run only when state changes

// CRUD
// API methods: GET -> data fetches only (reads)
// Post -> create, add data
// PUT , PATCH -> both for update (PUT: while editing - whole response is sent, PATCH: only sends what is edited)
// DELETE -> delete data
