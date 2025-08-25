import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Student SignUp</h1>
      <form className="mt-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input type="password" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">College</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Phone No</label>
          <input type="tel" pattern="[0-9]{10}"  className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Year of Graduation</label>
          <input type="number" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Current Year</label>
          <input type="number" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Field of Study</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Field</option>
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="engineering">Engineering</option>
            <option value="mathematics">Mathematics</option>
            
          </select>
        </div>
        <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-full">Sign Up</button>
      </form>
      <p className="text-center mt-4">
        Already have an account? <Link to="/StudentSignin" className="text-pink-500">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
