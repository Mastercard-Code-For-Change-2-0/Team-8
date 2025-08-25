import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import heroImage from '../assets/heroImage.png'; // Replace with your actual image path

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
    <div className="">
      {/* Hero Section */}
      <section className="relative text-center text-white">
        <img
          src={heroImage} // Replace with your hero image URL
          alt="Helping Hands"
          className="w-full h-96 object-contain"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold drop-shadow-md">We empower women to</h1>
          <p className="mt-4 text-xl max-w-2xl drop-shadow-md">rise to leadership</p>
          
        </div>
      </section>

      {/* About Us Summary Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We are a passionate team dedicated to creating lasting change through comprehensive programs in education, healthcare, and community support. Our goal is to empower individuals and build a brighter, more equitable future for everyone.
        </p>
        
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
  <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-12">
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-pink-500">Science</h3>
    </div>
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-pink-500">Technology</h3>
    </div>
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-pink-500">Engineering</h3>
  </div>
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-pink-500">Mathematics</h3>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;