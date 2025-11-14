import { useState } from "react";
import { Calendar, User, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "./AuthModal";
import  Button  from "./Button";

const Navigation = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const location = useLocation();

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EventHub</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`transition-colors ${isActive("/") ? "text-purple-600 font-medium" : "text-gray-700 hover:text-purple-600"}`}>Home</Link>
              <Link to="/events" className={`transition-colors ${isActive("/events") ? "text-purple-600 font-medium" : "text-gray-700 hover:text-purple-600"}`}>Events</Link>
              <Link to="/about" className={`transition-colors ${isActive("/about") ? "text-purple-600 font-medium" : "text-gray-700 hover:text-purple-600"}`}>About</Link>
              <Link to="/contact" className={`transition-colors ${isActive("/contact") ? "text-purple-600 font-medium" : "text-gray-700 hover:text-purple-600"}`}>Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => openAuthModal("login")} className="text-gray-700 hover:text-purple-600">Login</Button>
              <Button onClick={() => openAuthModal("signup")} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">Sign Up</Button>
              
              {/* Profile Icon */}
              <Link to="/profile">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer">
                  <User className="h-5 w-5 text-purple-600" />
                </div>
              </Link>
              {/* Orders Icon */}
  <Link to="/orders">
    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer">
      <ShoppingBag className="h-5 w-5 text-purple-600" />
    </div>
  </Link>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Navigation;
