import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Replace with the actual path to your logo image

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-pink-500"><img src={logo} alt="NGO Logo" className="h-10 w-10 inline-block" /></Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-pink-500">Home</Link>
            {/* <Link to="/about" className="text-gray-600 hover:text-pink-500">About</Link> */}
            <Link to="/events" className="text-gray-600 hover:text-pink-500">Events</Link>
            {/* <Link to="/contact" className="text-gray-600 hover:text-pink-500">Contact</Link> */}
            <Link to="/signin" className="text-gray-600 hover:text-pink-500">Admin</Link>
            <Link to="/StudentSignin" className="text-gray-600 hover:text-pink-500">Student</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
