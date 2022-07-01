import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Digbeth Kid!",
  });

  // We can also handle objects like this.
  /* const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Digbeth Boy!"); */
  // console.log(person);
  const changeMessage = () => {
    setPerson({ ...person, message: "Peaky Fooking Blinders" }); // we preserve the old values using spread operator.then we change the specific thing we want to change.
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
