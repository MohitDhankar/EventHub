import { Calendar, MapPin, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EventHub</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              The ultimate platform for event booking and management. Create unforgettable experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-purple-600 text-sm">Home</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-purple-600 text-sm">Events</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-purple-600 text-sm">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600 text-sm">Contact</Link></li>
              <li><Link to="/profile" className="text-gray-600 hover:text-purple-600 text-sm flex items-center"><User className="h-4 w-4 mr-2" />Profile</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 text-sm">Event Planning</span></li>
              <li><span className="text-gray-600 text-sm">Venue Booking</span></li>
              <li><span className="text-gray-600 text-sm">Guest Management</span></li>
              <li><span className="text-gray-600 text-sm">Custom Solutions</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 text-sm"><Mail className="h-4 w-4 mr-2" />hello@eventhub.com</li>
              <li className="flex items-center text-gray-600 text-sm"><Phone className="h-4 w-4 mr-2" />(555) 123-4567</li>
              <li className="flex items-center text-gray-600 text-sm"><MapPin className="h-4 w-4 mr-2" />New York, NY</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2024 EventHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-600 hover:text-purple-600 text-sm cursor-pointer">Privacy Policy</span>
              <span className="text-gray-600 hover:text-purple-600 text-sm cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
