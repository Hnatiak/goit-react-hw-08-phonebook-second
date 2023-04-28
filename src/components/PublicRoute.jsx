import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; //Route,
// import selectIsLoggedIn from "../redux/auth/auth-selectors";

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/" /> : children;
};

export default PublicRoute;