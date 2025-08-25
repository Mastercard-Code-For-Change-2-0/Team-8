import React from 'react';
import { Link } from 'react-router-dom';

const AdminDash = () => {
    const handleDownloadCSV = async () => {
  try {
    const res = await fetch("/api/leads");
    const leads = await res.json();

    if (leads.length === 0) {
      alert("No leads found in database!");
      return;
    }

    const headers = ["Emailid","Event Name"];
    const rows = leads.map((lead) => [
      lead.student_email,
      lead.title,
      lead.status
      //lead.email,
      //lead.phone,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "leads.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error fetching leads:", error);
  }
};

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
        <button
        onClick={handleDownloadCSV}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Download Leads CSV
      </button>
      </div>
      <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-4 tracking-wide drop-shadow">
        Admin Dashboard
      </h1>
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">
        Events
      </h2>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-500">Charity Gala</h2>
          <p className="mt-2 text-gray-600">Join us for a night of giving and fun.</p>
          <Link to="/intrested" className="text-pink-500 hover:underline mt-4 inline-block">Intrested</Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-500">Charity Gala</h2>
          <p className="mt-2 text-gray-600">Join us for a night of giving and fun.</p>
          <Link to="/intrested" className="text-pink-500 hover:underline mt-4 inline-block">Intrested</Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-500">Charity Gala</h2>
          <p className="mt-2 text-gray-600">Join us for a night of giving and fun.</p>
          <Link to="/intrested" className="text-pink-500 hover:underline mt-4 inline-block">Intrested</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;