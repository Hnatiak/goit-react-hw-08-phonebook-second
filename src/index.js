// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

// import { store } from './redux/store'; 

// // import { PersistGate } from 'redux-persist/integration/react';
// import App from './App';
// import './index.css';

// // import '../src/shared/styles/styles.css';
// // import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//         {/* <BrowserRouter> */}
//           <App />
//         {/* </BrowserRouter> */}
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import App from "./App";

ReactDOM.createRoot.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./redux/store";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
