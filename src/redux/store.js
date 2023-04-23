// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-reducer';
// // import persistReducer from 'redux-persist/es/persistReducer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,

//     // ====================================================================================
//     // contacts: persistReducer(contactsPersistConfig, contactsReducer),
//     // filter: filteReducer,
//   },
// });

// export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import appReducer from "./app/app-reducer";
import authReducer from "./auth/auth-reducer";


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const store = configureStore({
  reducer: {
    app: appReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const storePersistor = {
  store, persistor
}

export default storePersistor;