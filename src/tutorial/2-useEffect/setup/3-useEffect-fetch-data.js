import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]); // preserve the values and trigger re-render.

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // this will crash the browser as it will create an infinite loop. update users, -> triggers re-render, in turn triggers useEffect. In order to prevent this, pass empty dependency list, so that useEffect gets called once at initial render.
    // console.log(users); whenever we are calling the useState function inside the async function of useEffect, make sure to pass the empty dependency list else we will get an infinite loop and browser will crash.
  };

  useEffect(() => {
    // useEffect runs on every re-render. So getUsers again gets called.
    getUsers();
  }, []); // we can not make the callback function async ,as it expects a cleanup function not a promise. So we can make async function inside the callback function or set up a different function outside. fetch returns a promise.
  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
