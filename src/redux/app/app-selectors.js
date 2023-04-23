// import { createSlice } from '@reduxjs/toolkit';

// import {
//   fetchContacts,
//   addContact,
//   removeContact,
// } from './contacts-actions';

// // import contactsOperation from './contacts-operations';

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,

//   // contacts: {
//   //   items: [],
//   //   isLoading: false,
//   //   error: null
//   // },
//   // filter: ""
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending]: store => {
//       store.isLoading = true;
//       store.error = null;
//     },
//     [fetchContacts.fulfilled]: (store, { payload }) => {
//       store.isLoading = false;
//       store.items = payload;
//     },
//     [fetchContacts.rejected]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },
//     [addContact.pending]: store => {
//       store.isLoading = true;
//       store.error = null;
//     },
//     [addContact.fulfilled]: (store, { payload }) => {
//       store.isLoading = false;
//       store.items.push(payload);
//     },
//     [addContact.rejected]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },
//     [removeContact.pending]: store => {
//       store.isLoading = true;
//       store.error = null;
//     },
//     [removeContact.fulfilled]: (store, { payload }) => {
//       store.isLoading = false;
//       store.items = store.items.filter(item => item.id !== payload);
//     },
//     [removeContact.rejected]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },
//   },
// });

// // const contactsSlice = createSlice({
// //   name: 'contacts',
// //   initialState,
// //   extraReducers: {
// //     [fetchContacts.register.fulfilled](state, action) {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //       state.isLoggedIn = true;
// //     }
// //     // [addContact.register.fulfilled](state, action) {}
// //     // [removeContact.register.fulfilled](state, action) {}
// //   },
// // })

// export default contactsSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";

const getIsLoading = (state) => state.app.loading;
const getFilter = (state) => state.app.filters;
const getContacts = (state) => state.app.contacts;

/* const getVisibleFilterArray = (state) => {
  const allContacts = getContacts(state);
  const filterNames = getFilter(state);
  let newArr = allContacts.filter(({ name }) =>
    name.toUpperCase().includes(filterNames)
  );
  return [...newArr];
}; */

// add memo
const getVisibleFilterArray = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    let newArr = contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter)
    );
    return [...newArr];
  }
);

const contactsSelector = {
  getIsLoading, getFilter, getContacts, getVisibleFilterArray
}

export default contactsSelector;
