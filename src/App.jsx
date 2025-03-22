import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "./assets/fontawesome-free-6.6.0-web/css/all.css";
function App() {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/LogIn">Log In</Link>
      <Link to="/SignUp">Sign Up</Link>
      <Outlet />
    </>
  );
}

export default App;
