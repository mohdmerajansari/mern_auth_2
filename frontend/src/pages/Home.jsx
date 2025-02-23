import React, { useEffect, useState } from "react";
import NavbarWLI from "../components/NavbarWLI";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";

function Home() {
  const [activeUser, setActiveUser] = useState();
  useEffect(() => {
    setActiveUser(localStorage.getItem("LoggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("Token");
    handleSuccess("User Logged out successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };
  return (
    <>
      <NavbarWLI />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
          <p className="text-gray-600 mb-4">{activeUser}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Home;
