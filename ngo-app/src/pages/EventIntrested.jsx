import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventInterested = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/EventRegister');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Interested For Event</h1>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-full">Interested</button>
      </form>
    </div>
  );
};

export default EventInterested;