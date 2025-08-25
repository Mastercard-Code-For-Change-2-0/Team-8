import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Events = () => {

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/admin/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      setEvents(staticEvents);
    };
    fetchEvents();
  })

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">Events</h1>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {
            events.map((event) => (
              <div key={event.event_id} className="mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-pink-500">{event.title}</h2>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <Link to="/intrested" className="text-pink-500 hover:underline mt-4 inline-block">Intrested</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Events;
