import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth); // triggering the re-render. whenever we are triggering the re-render we are calling the useEffect.
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize); // there will be a number of event listeners invoked everytime useEffect is called  and that will leak memory when our app gets bigger.Everytime we have a useEffect, we have the option to return a function.It will be invoked when we exit.
    return () => {
      console.log("Clean Up");
      window.removeEventListener("resize", checkSize); // before we use useEffect after re-rendering, we will run the cleanup function first to avoid memory leak(remove event listeners). It is a good practice to set up a clean up function after every we set up an effect.
    };
  }, []); // here if we pass the blank dependency list, we can remove the cleanup function here.because in that case we will also have only one eventListener. But cleanup function is necessary when we have conditional rendering, appearing and disappearing of components.In this case we have the component which is always visible, so it makes sense to pass an empty dependency list.In that case we have only one eventListener.
  console.log("Render");
  return (
    <>
      <h1>Window</h1>
      <h2>{size} Pixels</h2>
    </>
  );
};

export default UseEffectCleanup;
