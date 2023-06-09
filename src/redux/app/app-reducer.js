import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";
import operations from "./app-operations";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const contacts = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],

[operations.addContact]: (state, { type, payload }) => {
  let nameArray = state.map((cur) => cur.name);
  if (!nameArray.includes(payload.name)) {
    return [...state, payload];
  } else {
    return state;
  }
},
  [actions.deleteContactSuccess]: (state, { types, payload }) => {
    let newArrAfterDel = state.filter((elem) => elem.id !== payload);
    return [...newArrAfterDel];
  },
});

const loading = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
});

const filters = createReducer("", {
  [actions.filterSet]: (state, { payload }) => {
    return payload;
  },
});

export default combineReducers({ contacts, filters, loading });
