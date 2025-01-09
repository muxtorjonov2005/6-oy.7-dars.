import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  function PrivateRoute({ children }) {
    if (!token) {
      navigate("/login"); 
      return
    }
    return children;
  }

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route index element={<Register></Register>}></Route>
        
        <Route
          path="/home"
          element={
            <PrivateRoute >
              <Home></Home>
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <PrivateRoute >
              <About></About>
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/details/:id"
          element={
            <PrivateRoute >
              <Details></Details>
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="*"
          element={
            <PrivateRoute >
              <ErrorPage></ErrorPage>
            </PrivateRoute>
          }
        ></Route>

      </Routes>
    </div>
  );
}

export default App;
