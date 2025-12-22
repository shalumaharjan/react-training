import React from "react";

const ParentComponent = ({ children }) => {
  return (
    <>
      <div>
        <nav>Navigation Bar</nav>
        {children}
        <footer>Footer</footer>
      </div>
    </>
  );
};

export default ParentComponent;
