import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// A reusable component for the animated statistics
const Statistic = ({ number, suffix, text }) => {
  // ref is attached to the component, inView is a boolean that is true when the component is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.1,    // Trigger animation when 10% of the element is visible
  });

  return (
    <div ref={ref} className="p-8">
      <h3 className="text-6xl font-bold text-pink-500">
        {/* The CountUp component will start its animation when inView is true */}
        {inView ? <CountUp start={0} end={number} duration={2.5} separator="," /> : '0'}
        {suffix}
      </h3>
      <p className="mt-2 text-xl text-gray-600">{text}</p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-light-pink">
      {/* Hero Section */}
      <section className="relative text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your hero image URL
          alt="Helping Hands"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold drop-shadow-md">Making a Difference, Together</h1>
          <p className="mt-4 text-xl max-w-2xl drop-shadow-md">Join our mission to bring hope and support to communities in need.</p>
          <Link
            to="/donate"
            className="mt-8 bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* About Us Summary Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We are a passionate team dedicated to creating lasting change through comprehensive programs in education, healthcare, and community support. Our goal is to empower individuals and build a brighter, more equitable future for everyone.
        </p>
        <Link to="/about" className="mt-6 inline-block text-pink-500 font-semibold hover:underline">
          Learn More About Us →
        </Link>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Impact in Numbers</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Using the new Statistic component */}
            <Statistic number={10000} suffix="+" text="Lives Touched" />
            <Statistic number={50} suffix="+" text="Projects Completed" />
            <Statistic number={1000000} suffix="+" prefix="$" text="Funds Raised" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">What We Do</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-pink-500">Education</h3>
            <p className="mt-2 text-gray-600">Providing access to quality education for underprivileged children.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-pink-500">Healthcare</h3>
            <p className="mt-2 text-gray-600">Offering free medical camps and healthcare services to remote areas.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-pink-500">Community Support</h3>
            <p className="mt-2 text-gray-600">Running food drives and support programs for families in need.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;