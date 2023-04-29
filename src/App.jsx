import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "./components/AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomePage = lazy(() => import("./views/HomeViews"));
const LoginPage = lazy(() => import("./views/LoginView"));
const RegisterPage = lazy(() => import("./views/RegisterViews"));
const UsersPage = lazy(() => import("./views/ContactsView"));

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route> 
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                isAuthenticated ? (
                  <PrivateRoute>
                    <UsersPage />
                  </PrivateRoute>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="register"
              element={
                isAuthenticated ? (
                  <Navigate to="/contacts" replace />
                ) : (
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                )
              }
            />
            <Route
              path="login"
              element={
                isAuthenticated ? (
                  <Navigate to="/contacts" replace />
                ) : (
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                )
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;