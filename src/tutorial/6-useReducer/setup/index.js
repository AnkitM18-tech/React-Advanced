import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function --> manipulate the state once we dispatch our action.

// const [people, setPeople] = useState(data);
// const [showModal, setShowModal] = useState(false);
/* setShowModal(true);
  setPeople([...people, { id: new Date().getTime().toString(), name }]);
  setName(""); */
/* onChange={(e) => setName(e.target.value)} */
/* {showModal && <Modal />} */
/*
  {people.map((person) => {
    return (
      <div key={person.id}>
        <h4>{person.name}</h4>
      </div>
    );
  })}
  */
//  Reducer takes state right before the update and what action you want to do. We always need to return some kind of state from the reducer else we will get error.
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "ADD_ITEM", payload: newItem }); // once you dispatch your action, then we need to handle in the reducer. typeprop is necessary.
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
