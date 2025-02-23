import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useState } from "react";
import RefreshHandler from "./components/RefreshHandler";

function App() {
  const [authenticated, setAuthenticated] = useState();

  const PrivateRouter = ({ element }) => {
    return authenticated ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/home"
          element={<PrivateRouter element={<Home />} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
