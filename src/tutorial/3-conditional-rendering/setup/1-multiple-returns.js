import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true); // by default we will get multiple returns if we not pass any default values or pass false.
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState("default user");

  useEffect(() => {
    // setIsLoading(true);
    fetch(url) // In fetch by default it will not trigger the error, if that url doesn't exist it will give it as a network error not 404
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText); // if we remove this then we will get TypeError: Cannot destructure property 'login' of 'user' as it is undefined. The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack.
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    // return <h2>Loading...</h2>; // we can return an entire application or component here.
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
