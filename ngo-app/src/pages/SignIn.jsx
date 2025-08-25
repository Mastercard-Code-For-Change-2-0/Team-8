import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Sign In</h1>
      <form className="mt-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input type="password" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-full">Sign In</button>
      </form>
      <p className="text-center mt-4">
        Don't have an account? <Link to="/signup" className="text-pink-500">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
