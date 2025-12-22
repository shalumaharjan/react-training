import React from "react";

const Boolean = () => {
  const [showCounter, setShowCounter] = useState(true);
  const toggle = () => {
    setShowCounter(!showCounter);
  };

  return (
    <>
      {/* <Counter /> */}
      {/* {showCounter && <Counter />} */}
      {/* {showCounter ? <h1>Hello</h1> : <h1>Bye</h1>} */}
      {showCounter ? <Counter /> : <h1>No Content</h1>}
      <button onClick={toggle}>Click to toggle</button>
    </>
  );
};

export default Boolean;
