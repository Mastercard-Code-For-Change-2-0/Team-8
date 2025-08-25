import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [field, setField] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !college ||
      !phone ||
      !year ||
      !currentYear ||
      !field
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const payload = {
        name,
        email,
        password,
        phone,
        college,
        grad_year : year,
        curr_year : currentYear,
        field_of_study : field,
      };

      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        payload
      );

      console.log("Signup Successful:", response.data);

      setName("");
      setEmail("");
      setPassword("");
      setCollege("");
      setPhone("");
      setYear("");
      setCurrentYear("");
      setField("");

      alert("Signup Successful!");
      navigate("/StudentSignin");

    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data.message || "An unexpected error occurred.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
      console.error("Signup Error:", err);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-500">
        Student SignUp
      </h1>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            value={name}
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">College</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            value={college}
            placeholder="Enter your college"
            onChange={(e) => setCollege(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Phone No</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 border rounded-lg"
            value={phone}
            placeholder="Enter your email"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Year of Graduation</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg"
            value={year}
            placeholder="Enter your year of graduation"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Current Year</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg"
            value={currentYear}
            placeholder="Enter your email"
            onChange={(e) => setCurrentYear(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Field of Study</label>
          <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setField(e.target.value)} value={field}>
            <option value="">Select Field</option>
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="engineering">Engineering</option>
            <option value="mathematics">Mathematics</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-3 rounded-full"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/StudentSignin" className="text-pink-500">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
