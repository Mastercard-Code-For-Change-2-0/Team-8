import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentDashboard = () => {
  const [events, setEvents] = React.useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/users/participatedEvents/1"
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
      <div className="flex justify-end mb-6"></div>
      <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-4 tracking-wide drop-shadow">
        Student Dashboard
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
            <p className="mt-2 text-gray-600">Status: {event.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
