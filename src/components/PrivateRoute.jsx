import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; //Route, Routes
import authSelectors from "../redux/auth/auth-selectors";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => authSelectors.isAuthenticated(state));
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;