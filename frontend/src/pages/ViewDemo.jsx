import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ViewDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">EventHub Demo</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how EventHub simplifies event creation, guest management, and booking — all in one place.
          </p>
        </div>

        {/* Video or Image Preview */}
        <div className="mb-16 flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="EventHub Demo"
            className="w-full h-80 md:h-[450px] rounded-xl border"
            allowFullScreen
          ></iframe>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/70 border p-6 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">📅 Easy Event Creation</h3>
            <p className="text-gray-600">Create, customize, and publish events in just a few clicks with our intuitive interface.</p>
          </div>
          <div className="bg-white/70 border p-6 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🎫 Seamless Bookings</h3>
            <p className="text-gray-600">Attendees can easily view events, book seats, and manage tickets through the platform.</p>
          </div>
          <div className="bg-white/70 border p-6 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">👥 Guest Management</h3>
            <p className="text-gray-600">Track RSVPs, manage guest lists, and engage attendees effortlessly.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/events">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4">
              Explore Live Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ViewDemo;
