import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const payload = {
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:3000/api/admin/login",
        payload
      );

      navigate("/AdminDash");

      setEmail("");
      setPassword("");
      alert("Login Successful!");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data.message || "An unexpected error occurred.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
      console.error("Login Error:", err);
    }
  };
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">
        Admin Login
      </h1>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            value={password}
            placeholder="Enter your email"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" bg-pink-500 text-white px-6 py-3 rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
