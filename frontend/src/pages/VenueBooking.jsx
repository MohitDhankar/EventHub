import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { MapPin, Calendar, DollarSign, Users } from "lucide-react";

const VenueBooking = () => {
  const [venueData, setVenueData] = useState({
    name: "",
    location: "",
    capacity: "",
    availableDate: "",
    price: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setVenueData({ ...venueData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Book a Venue</h1>

        <form className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <Input
              placeholder="Venue Name"
              value={venueData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <Input
              placeholder="Location"
              value={venueData.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Capacity"
              value={venueData.capacity}
              onChange={(e) => handleChange("capacity", e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <Input
              type="date"
              value={venueData.availableDate}
              onChange={(e) => handleChange("availableDate", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Price (₹)"
              value={venueData.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Description"
              value={venueData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full border rounded p-3 text-sm text-gray-800"
            />
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              Book Venue
            </Button>
          </div>
        </form>

        {/* Live Preview */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Venue Preview</h2>
        <div className="bg-white/70 backdrop-blur-sm border p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{venueData.name || "Venue Name"}</h3>
          <p className="text-gray-600 mb-4">{venueData.description || "Venue description will appear here."}</p>

          <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {venueData.location || "Location"}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {venueData.availableDate || "Available Date"}
            </span>
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {venueData.capacity || "Capacity"}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              ₹{venueData.price || "0"}
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VenueBooking;
