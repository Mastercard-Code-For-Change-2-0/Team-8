import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const AdminDash = () => {

  const [events, setEvents] = React.useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/1/events"
      );
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchEvents();
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Add Event and Download CSV File buttons at top right below navbar */}
      <div className="flex justify-end mb-6 space-x-4">
        <Link
          to="/addevent"
          className="bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
        >
          Add Event
        </Link>
        <Link
          to="/download-csv"
          className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition"
        >
          Download CSV File
        </Link>
      </div>
      <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-4 tracking-wide drop-shadow">
        Admin Dashboard
      </h1>
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">
        Events
      </h2>
      <div className="mt-8">
        {events.map((event) => (
          <div
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            key={event.id}
          >
            <h2 className="text-2xl font-bold text-pink-500">{event.title}</h2>
            <p className="mt-2 text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDash;