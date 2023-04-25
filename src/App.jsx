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
                  path="/contacts"
                  element={
                    <PrivateRoute>
                      <UsersPage path="/contacts" component={UsersPage}/>
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
                  redirectTo="/contacts"
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


// import { Component, Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import AppBar from "./components/AppBar";
// import authOperations from "./redux/app/app-operations";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

// const HomePage = lazy(() => import("./views/HomeViews"));
// const LoginPage = lazy(() => import("./views/LoginView"));
// const RegisterPage = lazy(() => import("./views/RegisterViews"));
// const UsersPage = lazy(() => import("./views/ContactsView"));

// class App extends Component {
//   // componentDidMount() {
//   //   this.props.getCurrentUser();
//   // }

//   render() {
//     return (
//       <div className="App">
//         <AppBar />
//         <Suspense fallback={<p>Loading...</p>}>
//           <Routes>
//             <Route path="/" element={<HomePage />}>
//               <Route
//                 path="/"
//                 element={
//                   this.props.isLoggedIn ? (
//                     <PrivateRoute>
//                       <UsersPage />
//                     </PrivateRoute>
//                   ) : (
//                     <PublicRoute>
//                       <HomePage />
//                     </PublicRoute>
//                   )
//                 }
//               />
//               <Route
//                 path="/register"
//                 element={
//                   <PublicRoute restricted>
//                     <RegisterPage />
//                   </PublicRoute>
//                 }
//               />
//               <Route
//                 path="/login"
//                 element={
//                   <PublicRoute restricted>
//                     <LoginPage />
//                   </PublicRoute>
//                 }
//               />
//             </Route>
//           </Routes>
//         </Suspense>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   getCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);