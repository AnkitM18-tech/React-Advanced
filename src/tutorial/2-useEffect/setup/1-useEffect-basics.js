import React, { useState, useEffect } from "react";
// by default runs after every re-render when you have no dependency array.
// cleanup function
// second parameter
// We see double console.logs because of the React.strictMode in App.js. console.logs are also considered effects.
// useState preserve the value and triggers re-render.useEffect is used when we want some work outside of the component.
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    if (value >= 1) {
      document.title = `New messages(${value})`;
    }
  }, [value]); // 2nd argument -> array(list) of dependencies, if we keep it blank [], then it will run only on initial render.If you only want the useEffect to run only on initial render, then keep the list of dependencies empty and pass as second argument.If we pass the value(variable) on which the useEffect is dependent, then we can re-render whenever anything related to that value change.(Here we re-render when value is changed via setValue. Likewise we can enter variables on which useEffect is dependent.).Each and every time the dependency will change, if it is added to the array, then useEffect will also run. We can have as many useEffects as we want.
  useEffect(() => {
    console.log("Second Call");
  }, []);
  console.log("Render Component");
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Smash Me!
      </button>
    </>
  );
};

export default UseEffectBasics;
