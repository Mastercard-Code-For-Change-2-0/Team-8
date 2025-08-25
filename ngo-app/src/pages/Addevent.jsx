import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Addevent = () => {
  const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add authentication logic here if needed
      navigate('/AdminDash');
    };
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Admin Login</h1>
      <form className="mt-8 max-w-md mx-auto"onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Event Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Register Last Date</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Start Date</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">End Date</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button type="submit" className=" bg-pink-500 text-white px-6 py-3 rounded-full">Done</button>
      </form>
      
    </div>
  );
};

export default Addevent;