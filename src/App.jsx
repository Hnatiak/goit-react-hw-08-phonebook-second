// import React from 'react';
// import ContactForm from './components/ContactForm';
// import AppBar from './components/AppBar';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import css from './App.module.css';
// import { Routes, Route } from 'react-router-dom';
// import { Component, Suspense, lazy } from "react";
// import { connect } from "react-redux";
// import AppBar from "./components/AppBar";
// import authOperations from "./redux/contacts/contacts-actions";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";


// const HomeView = lazy(() => import("./views/HomeViews"));
// const LoginView = lazy(() => import("./views/LoginView"));
// const RegisterView = lazy(() => import("./views/RegisterView"));
// const ContactsView = lazy(() => import("./views/ContactsView"));

// import RegisterViews from 'views/RegisterViews';
// import LoginViews from 'views/LoginViews';



// export default function App() {
//   return (
//     <div className={css.container}>
//       <AppBar />

//        {/* <Routes> */}
//         {/* <Route exact path="/" component={HomeView} /> */}
//         {/* <Route exact path="/register" component={RegisterViews} /> */}
//         {/* <Route exact path="/login" component={LoginViews} /> */}
//       {/* </Routes> */}

//       <ContactForm />
//       <h2 className={css.subtitle}>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// }


// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <div className="App">
//         <AppBar />
//         <Suspense fallback={<p>Loading...</p>}>
//           <Routes>
//             <Route exact path="/" component={HomeView} />
//             <PublicRoute path="/register" redirectTo="/contacts" restricted>
//               <Route path="/register" component={RegisterView} />
//             </PublicRoute>
//             <PublicRoute path="/login" redirectTo="/contacts" restricted>
//               <Route path="/login" component={LoginView} />
//             </PublicRoute>
//             <PrivateRoute path="/contacts" redirectTo="/login">
//               <Route path="/contacts" component={ContactsView} />
//             </PrivateRoute>
//           </Routes>
//         </Suspense>
//       </div>
//     );
//   }
// }

// const mapDispatchToProrps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProrps)(App);


// import { Component, Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import AppBar from "./components/AppBar";
// import authOperations from "./redux/contacts/contacts-operations";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

// const HomeView = lazy(() => import("./views/HomeViews"));
// const LoginView = lazy(() => import("./views/LoginView"));
// const RegisterView = lazy(() => import("./views/RegisterViews"));
// const ContactsView = lazy(() => import("./views/ContactsView"));

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <div className="App">
//         <AppBar />
//         <Suspense fallback={<p>Loading...</p>}>
//           <Routes>
//             <Route path="/" exact="true" component={HomeView} /> 
//             {/* //exact="true" */}
//             <PublicRoute path="/register" redirectTo="/contacts" restricted>
//               <Route path="/register" component={RegisterView} />
//             </PublicRoute>
//             <PublicRoute path="/login" redirectTo="/contacts" restricted>
//               <Route path="/login" component={LoginView} />
//             </PublicRoute>
//             <PrivateRoute path="/contacts" redirectTo="/login">
//               <Route path="/contacts" component={ContactsView} />
//             </PrivateRoute>
//           </Routes>
//         </Suspense>
//       </div>
//     );
//   }
// }

// const mapDispatchToProrps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProrps)(App);


// import { Component, Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import AppBar from "./components/AppBar";
// import authOperations from "./redux/contacts/contacts-operations";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

// const Layout = lazy(() => import("./views/Layout"));
// const HomePage = lazy(() => import("./views/HomeViews"));
// const LoginPage = lazy(() => import("./views/LoginView"));
// const RegisterPage = lazy(() => import("./views/RegisterViews"));
// const UsersPage = lazy(() => import("./views/ContactsView"));

// class App extends Component {
//   // componentDidMount() {
//   //   this.props.onGetCurrentUser();
//   // }

//   render() {
//     return (
//       <div className="App">
//         <AppBar />
//         <Suspense fallback={<p>Loading...</p>}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route
//               index
//               element={
//                 <PublicRoute>
//                   <HomePage />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               path="users"
//               element={
//                 <PrivateRoute>
//                   <UsersPage />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="register"
//               element={
//                 <PublicRoute restricted>
//                   <RegisterPage />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               path="login"
//               element={
//                 <PublicRoute restricted>
//                   <LoginPage />
//                 </PublicRoute>
//               }
//             />
//           </Route>
//         </Routes>
//         </Suspense>
//       </div>
//     );
//   }
// }

// const mapDispatchToProrps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProrps)(App);



import { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "./components/AppBar";
import authOperations from "./redux/app/app-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// const Layout = lazy(() => import("./views/Layout"));
const HomePage = lazy(() => import("./views/HomeViews"));
const LoginPage = lazy(() => import("./views/LoginView"));
const RegisterPage = lazy(() => import("./views/RegisterViews"));
const UsersPage = lazy(() => import("./views/ContactsView"));

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  render() {
    return (
      <div className="App">
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          {/* <Routes>
            <Route path="/" exact='true' element={<HomePage />}>
              {/* <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                redirectTo="/contacts"
                element={
                  <PublicRoute restricted>
                    <RegisterPage path="/register" component={RegisterPage}/>
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                redirectTo="/contacts"
                element={
                  <PublicRoute restricted>
                    <LoginPage path="/login" component={LoginPage}/>
                  </PublicRoute>
                }
                />
              <Route
                path="users"
                element={
                  <PrivateRoute>
                    <UsersPage path="/login" component={UsersPage}/>
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes> */}

              <Routes>
              <Route path="/" exact='true' element={<HomePage />}>
                <Route
                  index
                  element={
                    <PublicRoute>
                      <HomePage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="users"
                  element={
                    <PrivateRoute>
                      <UsersPage path="/login" component={UsersPage}/>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="register"
                  redirectTo="/contacts"
                  element={
                    <PublicRoute restricted>
                      <RegisterPage path="/register" component={RegisterPage}/>
                    </PublicRoute>
                  }
                />
                <Route
                  path="login"
                  element={
                    <PublicRoute restricted>
                      <LoginPage path="/login" component={LoginPage}/>
                    </PublicRoute>
                  }
                />
              </Route>
            </Routes>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProrps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProrps)(App);






// import React, { Component, Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom"; //, Switch
// import { connect } from "react-redux";
// import AppBar from "./components/AppBar";
// import authOperations from "./redux/filter/filter-operations";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

// const HomeView = lazy(() => import("./views/HomeViews"));
// const LoginView = lazy(() => import("./views/LoginView"));
// const RegisterView = lazy(() => import("./views/RegisterViews"));
// const ContactsView = lazy(() => import("./views/ContactsView"));

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <div className="App">
//         <AppBar />
//         <Suspense fallback={<p>Loading...</p>}>
//           <Routes>
//             <Route exact='true' path="/" component={HomeView} />
//             <PublicRoute path="/register" redirectTo="/contacts" restricted>
//               <Route path="/register" component={RegisterView} />
//             </PublicRoute>
//             <PublicRoute path="/login" redirectTo="/contacts" restricted>
//               <Route path="/login" component={LoginView} />
//             </PublicRoute>
//             <PrivateRoute path="/contacts" redirectTo="/login">
//               <Route path="/contacts" component={ContactsView} />
//             </PrivateRoute>
//           </Routes>
//         </Suspense>
//       </div>
//     );
//   }
// }

// const mapDispatchToProrps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProrps)(App);