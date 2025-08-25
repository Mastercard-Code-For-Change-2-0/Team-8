import React from 'react';

const EventIntrested = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Intrested For Event</h1>
      <form className="mt-8 max-w-md mx-auto">
        {/* <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-full">Intrested</button>
      </form>
    </div>
  );
};

export default EventIntrested;
