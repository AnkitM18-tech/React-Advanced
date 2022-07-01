import React, { useState } from "react";

/* 
  Hook Infos ->
  // hooks start with use 
  // components name must be uppercase
  // must be in the function / component body
  // can not call as a condition
*/

const UseStateBasics = () => {
  // console.log(useState()); // undefined as we didn't pass any default value. it always returns array with 2 values.(value,function) - we give default value as argument once we invoke the function.(bool,object,string,number or array)
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title"); // the value and function that controls that value.
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello Moto!!"); // whatever the value passed to the function while invoking, that will be the new state value.
    } else {
      setText("random title");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
