// import { useSelector } from "react-redux";
// import { Navigate, Route } from 'react-router-dom';
// import authSelectors from "../redux/filter/filter-selectors";

// export default function PrivateRoute({
//   children,
//   redirectTo = "/",
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.isAuthenticated);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
//   // return isLoggedIn ? children : <Navigate to="/login" />;
// }

// import { useSelector } from "react-redux";
// import { Navigate, Route, Routes } from "react-router-dom"; //Route, 
// import authSelectors from "../redux/auth/auth-selectors";


// export default function PrivateRoute({
//   children,
//   redirectTo = "/",
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.isAuthenticated);
//   return (
//     <Routes>
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//     </Routes>
//   );
// }

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; //Route, Routes
import authSelectors from "../redux/auth/auth-selectors";

// export default function PrivateRoute({
//   children,
//   redirectTo = "/",
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.isAuthenticated);
//   return (
//     <Routes>
//       <Route {...routeProps}>
//         {isLoggedIn ? children : <Navigate to={redirectTo} />}
//       </Route>
//     </Routes>
//   );
// }

// export const PrivateRoute = ({ children }) => {
//   const isLoggedIn = useSelector(authSelectors);
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => authSelectors.isAuthenticated(state));
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;