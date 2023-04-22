import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'; //Route
import authSelectors from "../redux/filter/filter-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isAuthenticated);
  // return (
  //   <Route {...routeProps}>
  //     {isLoggedIn ? children : <Navigate to={redirectTo} />}
  //   </Route>
  // );
  return isLoggedIn ? children : <Navigate to="/login" />;
}
