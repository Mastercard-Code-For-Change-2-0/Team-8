import React from 'react';

const Donate = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Donate</h1>
      <form className="mt-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-600">Amount</label>
          <input type="number" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-full">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
