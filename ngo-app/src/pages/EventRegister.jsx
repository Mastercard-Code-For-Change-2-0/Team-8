import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EventRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/StudentDash');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Event Registration</h1>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Student Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
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
            <option value="engineering">Engineering</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-full">Register</button>
      </form>
    </div>
  );
};

export default EventRegister;   