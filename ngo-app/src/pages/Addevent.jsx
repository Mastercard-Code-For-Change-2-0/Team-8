import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Addevent = () => {
  const navigate = useNavigate();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const [registerLastDate, setRegisterLastDate] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const payload = {
        title,
        description,
        start_date: startDate,
        end_date: endDate,
        last_date_of_registeration: registerLastDate,
        venue,
      };

      const response = axios.post(
        "http://localhost:3000/api/admin/1/addEvent",
        payload
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    navigate("/AdminDash");
  };
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">
        Event Details
      </h1>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Event Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            value={title}
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            value={description}
            placeholder="Enter your description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Venue</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            value={venue}
            placeholder="Enter your Venue"
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Register Last Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg"
            value={registerLastDate}
            placeholder="Enter your Registeration Last Date"
            onChange={(e) => setRegisterLastDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Start Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg"
            value={startDate}
            placeholder="Enter your Start Date"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">End Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg"
            value={endDate}
            placeholder="Enter your End Date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" bg-pink-500 text-white px-6 py-3 rounded-full"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default Addevent;
