import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange -> We need to add these two to inputsin order to access them. -> using value we connect those state values, and without onChange handler we can't operate on those controlled inputs, React will prevent us. onChange() handler will trigger the callback function when the value changes. for that we need e.target.value to get the typed value in the inputs.

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Hello World"); // we won't be able to see this log because by default the browser will try to submit the form and refresh the page.for this we need event object and its preventDefault method. will still work in button onClick()
    // console.log(firstName, email); // now we can access state variables, instead of looking for specific inputs.
    if (firstName && email) {
      // console.log("Submit the Form");
      // In ES6 if the key and value names are same then we can omit the key.
      // const person = { firstName: firstName, email: email };
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("Empty Values");
    }
  };
  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

// Each child in a list should have a unique key prop.

export default ControlledInputs;
