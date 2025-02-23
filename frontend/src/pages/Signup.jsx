import React, { useState } from "react";
import NavbarWOLI from "../components/NavbarWOLI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users/signup`,
        { name, email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      handleSuccess("User sign up successful!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log("Error while sending data to the server", error.message);
    }
  };

  return (
    <>
      <NavbarWOLI />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Enter your details
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSignup}>
            <div className="space-y-4">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Full name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Signup;
