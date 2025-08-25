import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Registered button at top right below navbar */}
      <div className="flex justify-end mb-6">
        <Link
          to="/registered"
          className="bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
        >
          Registered
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center text-pink-500">Events</h1>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-500">Charity Gala</h2>
          <p className="mt-2 text-gray-600">Join us for a night of giving and fun.</p>
          <Link to="/intrested" className="text-pink-500 hover:underline mt-4 inline-block">Intrested</Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-500">Charity Gala</h2>
          <p className="mt-2 text-gray-600">Join us for a night of giving and fun.</p>
          <Link to="/intrested" className="text-pink-500 hover:underline mt-4 inline-block">Intrested</Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-500">Charity Gala</h2>
          <p className="mt-2 text-gray-600">Join us for a night of giving and fun.</p>
          <Link to="/intrested" className="text-pink-500 hover:underline mt-4 inline-block">Intrested</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;