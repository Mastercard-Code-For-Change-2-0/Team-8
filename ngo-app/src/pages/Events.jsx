import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Upcoming Events</h1>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-500">Charity Gala</h2>
          <p className="mt-2 text-gray-600">Join us for a night of giving and fun.</p>
          <Link to="/register" className="text-pink-500 hover:underline mt-4 inline-block">Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
