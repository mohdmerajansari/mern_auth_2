import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (localStorage.getItem("Token")) {
    setAuthenticated(true);
    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup"
    ) {
      navigate("/home", { replace: false });
    }
  }
  return null;
}

export default RefreshHandler;
