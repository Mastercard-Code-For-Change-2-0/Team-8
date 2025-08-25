import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-6 py-8 text-center">
      <h1 className="text-4xl font-bold text-pink-500">404 - Not Found</h1>
      <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      <div className="mt-8">
        <Link to="/" className="text-pink-500 hover:underline">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
