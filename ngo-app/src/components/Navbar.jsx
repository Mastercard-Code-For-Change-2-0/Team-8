import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-pink-500">NGO</Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-pink-500">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-pink-500">About</Link>
            <Link to="/events" className="text-gray-600 hover:text-pink-500">Events</Link>
            <Link to="/contact" className="text-gray-600 hover:text-pink-500">Contact</Link>
            <Link to="/donate" className="text-gray-600 hover:text-pink-500">Donate</Link>
            <Link to="/signin" className="text-gray-600 hover:text-pink-500">Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
