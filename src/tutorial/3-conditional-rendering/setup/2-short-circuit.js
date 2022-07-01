import React, { useState } from "react";
// short-circuit evaluation // based on some condition return some value to show.
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Peter");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  /* for empty default string firstValue --"Hello
  world", second value -- blank , If it is non-empty then first val--
  "non-empty string" , second value -- hello world */
  // OR (||) -> default - true -- default : false -- second value >> returning the element regardless. either second or default.
  // AND (&&) -> default - true -- second value : false -- default(blank) >> can trigger the showing and hiding of the component or element.We can also use !(NOT) operator.
  // if() doesn't return a value, we need something that returns a value to JSX, whether it is short-circuit opeartor(|| / &&) / ternary operator.

  return (
    <>
      {/* <h1>{firstValue}</h1>
  <h1>value : {secondValue}</h1> */}
      {/* if(){console.log("heeliii")} --> throws error as expression is expected.*/}
      <h1>{text || "Heya"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* text && <h1>Hello Sam!</h1> */}
      {/* isError && <h1>Hello, Monica!</h1> */}
      {isError ? <h1>Hello, DALL-E</h1> : <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
