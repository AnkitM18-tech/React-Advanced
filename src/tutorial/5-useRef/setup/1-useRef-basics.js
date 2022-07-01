import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // while submitting the form the current value of the element where we used ref attribute  will be stored in current prop's value.
    console.log(divContainer.current);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  }); //we don't need to pass dependency list as useRef doesn't trigger re-render.
  // console.log(refContainer);
  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
        <div ref={divContainer}>hello world</div>
      </form>
    </>
  );
};

export default UseRefBasics;
