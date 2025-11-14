import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { User, Mail, Phone, X } from "lucide-react";

const GuestManagement = () => {
  const { eventId } = useParams(); // ⬅️ get eventId from URL
  const [guest, setGuest] = useState({ name: "", email: "", phone: "" });
  const [guestList, setGuestList] = useState([]);

  // Fetch guests for this event
  const fetchGuests = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/guests/${eventId}`);
      setGuestList(res.data);
    } catch (err) {
      console.error("Fetch guests error:", err);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, [eventId]);

  const handleChange = (field, value) => {
    setGuest({ ...guest, [field]: value });
  };

  const addGuest = async (e) => {
    e.preventDefault();
    if (!guest.name || !guest.email || !guest.phone) return;

    try {
      await axios.post("http://localhost:5000/api/guests", {
        ...guest,
        eventId,
      });
      setGuest({ name: "", email: "", phone: "" });
      fetchGuests();
    } catch (err) {
      console.error("Add guest error:", err);
    }
  };

  const removeGuest = async (guestId) => {
    try {
      await axios.delete(`http://localhost:5000/api/guests/${guestId}`);
      fetchGuests();
    } catch (err) {
      console.error("Remove guest error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Guest Management
        </h1>

        <form onSubmit={addGuest} className="grid md:grid-cols-3 gap-6 mb-10">
          <Input
            placeholder="Full Name"
            value={guest.name}
            onChange={(e) => handleChange("name", e.target.value)}
            icon={<User className="h-5 w-5 text-purple-600" />}
          />
          <Input
            placeholder="Email"
            type="email"
            value={guest.email}
            onChange={(e) => handleChange("email", e.target.value)}
            icon={<Mail className="h-5 w-5 text-purple-600" />}
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            value={guest.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            icon={<Phone className="h-5 w-5 text-purple-600" />}
          />
          <div className="md:col-span-3">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3"
            >
              Add Guest
            </Button>
          </div>
        </form>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Guest List ({guestList.length})
        </h2>

        <div className="space-y-4">
          {guestList.length === 0 ? (
            <p className="text-gray-600">No guests added yet.</p>
          ) : (
            guestList.map((g) => (
              <div
                key={g._id}
                className="flex justify-between items-center bg-white/70 backdrop-blur-sm border p-4 rounded-xl"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {g.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{g.email}</p>
                  <p className="text-gray-600 text-sm">+91 {g.phone}</p>
                </div>
                <button
                  onClick={() => removeGuest(g._id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuestManagement;
