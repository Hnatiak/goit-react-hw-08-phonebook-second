// import { useSelector } from "react-redux";
// import { Routes, Route, Redirect } from "react-router-dom";
// import authSelectors from "../redux/filter/auth-selectors";


// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = "/",
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.isAuthenticated);
//   const shouldRedirect = isLoggedIn && restricted;
//   return (
//     <Routes>
//         <Route {...routeProps}>
//           {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//         </Route>
//     </Routes>
//   );
// }

import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import authSelectors from "../redux/filter/filter-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isAuthenticated);
  const shouldRedirect = isLoggedIn && restricted;
  return (
      <Route {...routeProps}>
        {shouldRedirect ? <Navigate to={redirectTo} /> : children}
      </Route>
  );
}