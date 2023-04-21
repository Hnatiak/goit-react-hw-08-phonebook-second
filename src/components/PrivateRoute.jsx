import { useSelector } from "react-redux";
import { Route, Navigate } from 'react-router-dom';
import authSelectors from "../redux/filter/filter-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to={redirectTo} />}
    </Route>
  );
}

// LAGSS WITH GITHUB