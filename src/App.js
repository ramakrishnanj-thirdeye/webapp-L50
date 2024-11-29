import React, { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Layout/Layout";
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  // Check the login status on component mount
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = sessionStorage.getItem("login") === "true";
      setIsAuthenticated(loginStatus);
    };
 
    checkLoginStatus();
  }, []);
 
  return (
    <Router>
      <Routes>
        {/* Public route for Login */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />
 
        {/* Protected route for Home */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Layout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
 
        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};
 
export default App;