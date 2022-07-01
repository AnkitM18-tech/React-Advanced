import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

/* When we toggle the component, then empty dependency list can not help us, so we need to use clean up function to get rid of the event listeners. In the previous example as we were not toggling the component, just rendering the element, empty dependency list works in that case. Even though useEffect runs only once, as we are toggling the component, there will be multiple event listeners. for each toggle. By using clean up function once we remove the component, using setShow, it will remove our event listener.*/

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size} Pixels</h2>
    </div>
  );
};

export default ShowHide;
