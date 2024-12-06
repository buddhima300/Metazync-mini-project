import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserLoging() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    const response = await axios.post(
      "http://localhost:5000/api/signin",
      loginData
    );
    try {
      if (response.status === 200) {
        const { userName, userId } = response.data;
        alert(`Login success ${userName} and id is ${userId}`);
        sessionStorage.setItem("userId", userId);
        navigate("/clientdashboard");
      }
    } catch (error) {
      console.log("Login Failed", error);
    }
  };
  return (
    <div className="reg-form">
      <div className="sub-container">
        {/* form start here */}
        <form class="max-w-sm mx-auto" onSubmit={handleSignIn}>
          <h2>SIGN IN</h2>
          <div class="mb-5">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username here"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password here"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            SIGNIN
          </button>
        </form>
      </div>
    </div>
  );
}
