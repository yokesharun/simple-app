import React, { createContext, useReducer } from "react";

import Reducer from "./Reducer";

const initialState = {
  persons: [
    {
      id: 1,
      first_name: "Dummy 1",
      last_name: "Dummy 1",
      dob: "2000-09-20",
    },
    {
      id: 2,
      first_name: "Dummy 2",
      last_name: "Dummy 2",
      dob: "2004-09-20",
    },
    {
      id: 3,
      first_name: "Dummy 3",
      last_name: "Dummy 3",
      dob: "2006-09-20",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function addPerson(person) {
    dispatch({
      type: "ADD_PERSON",
      payload: person,
    });
  }

  function editPerson(person) {
    dispatch({
      type: "EDIT_PERSON",
      payload: person,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        persons: state.persons,
        addPerson,
        editPerson,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
