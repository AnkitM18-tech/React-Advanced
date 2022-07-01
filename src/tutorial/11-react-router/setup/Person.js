import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  // console.log(useParams()); // useParams to access the value
  const [name, setName] = useState("default name");
  const { id } = useParams(); // the url param set in the path, if it is different then use that instead.
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
