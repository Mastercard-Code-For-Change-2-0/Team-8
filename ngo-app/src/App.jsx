import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
import Events from './pages/Events';
// import Contact from './pages/Contact';
// import Donate from './pages/Donate';
import EventRegistration from './pages/EventRegistration';
import SignIn from './pages/SignIn';
import StudentSignin from './pages/StudentSignin';
import SignUp from './pages/SignUp';
// import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
// import Chatbot from './components/Chatbot';
import EventIntrested from './pages/EventIntrested';
import StudentDashboard from './pages/StudentDashboard';
import AdminDash from './pages/AdminDash';
import Addevent from './pages/Addevent';
import EventRegister from './pages/EventRegister';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/events" element={<Events />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/donate" element={<Donate />} /> */}
            <Route path="/register" element={<EventRegistration />} />
            <Route path="/intrested" element={<EventIntrested />} />            
            <Route path="/signin" element={<SignIn />} />
            <Route path="/addevent" element={<Addevent />} />
            <Route path="/AdminDash" element={<AdminDash />} />
            <Route path="/StudentSignin" element={<StudentSignin />} />
            <Route path="/StudentDash" element={<StudentDashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/eventregister" element={<EventRegister />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Chatbot /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
