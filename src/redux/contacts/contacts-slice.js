import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,

  // contacts: {
  //   items: [],
  //   isLoading: false,
  //   error: null
  // },
  // filter: ""
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [removeContact.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;