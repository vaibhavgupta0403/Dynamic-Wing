import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        // console.log("nope");
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-8 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-yellow-700 mb-2">
              Email Address
            </p>
            <input
              className="rounded-md w-full px-3 py-2 border border-gra-300 outline-none"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-yellow-700 mb-2">Password</p>
            <input
              className="rounded-md w-full px-3 py-2 border border-gra-300 outline-none"
              type="password"
              onChange={(e) => setPasword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            className="mt-2 bg-yellow-800 rounded-md text-white w-full py-2 px-4"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
