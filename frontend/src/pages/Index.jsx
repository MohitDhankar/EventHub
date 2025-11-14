import { Users, MapPin, Calendar, ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import WavyBackground from "../components/WavyBackground";

const Index = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <WavyBackground /> {/* ✅ Waves now visible behind everything */}

       <div className="relative z-10 bg-transparent min-h-screen">
        <div className="slide-in-left">
          <Navigation />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 luxury-entrance">
              Create Unforgettable
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:300%_300%] inline-block animate-shimmer"> Events</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto luxury-entrance-delay-1">
              The ultimate platform for event booking and management. From intimate gatherings to large conferences, we make event planning effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center luxury-entrance-delay-2">
              <Link to="/events">
                <Button size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 hover:scale-110 transform transition-all duration-300 hover:shadow-2xl hover:rotate-1">
                  Browse Events
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </Button>
              </Link>
              <Link to="/view-demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-purple-300 text-purple-700 px-8 py-4 hover:scale-110 transform transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:-rotate-1">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            <Link to="/create-event" className="bounce-in-delay-1">
              <div className="bg-white/70 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-3 group hover:bg-gradient-to-br hover:from-white hover:to-purple-50 hover:border-purple-200">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <Calendar className="h-7 w-7 text-purple-600 group-hover:text-purple-700" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors duration-300">Easy Event Creation</h3>
                <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">Create and customize events in minutes with our intuitive interface.</p>
              </div>
            </Link>

            <Link to="/guest-management" className="bounce-in-delay-2">
              <div className="bg-white/70 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-blue-100 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-3 group hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:border-blue-200">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <Users className="h-7 w-7 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">Guest Management</h3>
                <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">Manage attendees, send invitations, and track RSVPs effortlessly.</p>
              </div>
            </Link>

            <Link to="/venue-booking" className="bounce-in-delay-3">
              <div className="bg-white/70 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-indigo-100 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-3 group hover:bg-gradient-to-br hover:from-white hover:to-indigo-50 hover:border-indigo-200">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <MapPin className="h-7 w-7 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-800 transition-colors duration-300">Venue Booking</h3>
                <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">Find and book the perfect venue for your event from our curated list.</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="luxury-entrance-delay-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;