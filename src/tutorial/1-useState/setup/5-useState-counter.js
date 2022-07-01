import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const timeoutIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1); // we need to grab the previous value, else in that 2s interval no matter how many times we click the button, it will increase only once.coz it will still think the value is 0.

      // The following approach can be used in previous examples.
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={timeoutIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
