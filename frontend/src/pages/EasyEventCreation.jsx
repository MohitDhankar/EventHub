import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Calendar, Clock, MapPin, DollarSign, Users } from "lucide-react";

const EasyEventCreation = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    price: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Fetch events error:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (field, value) => {
    setEventData({ ...eventData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(eventData).forEach((key) =>
        formData.append(key, eventData[key])
      );
      if (imageFile) formData.append("image", imageFile);

      const res = await axios.post("http://localhost:5000/api/events", formData);
      alert("Event created successfully!");

      // Redirect to guest management for this event
      navigate(`/guest-management/${res.data.event._id}`);

      setEventData({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        price: "",
        category: "",
      });
      setImageFile(null);
      fetchEvents();
    } catch (err) {
      console.error("Create event error:", err);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Easy Event Creation</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <input type="text" placeholder="Event Title" value={eventData.title}
              onChange={(e) => handleChange("title", e.target.value)} className="w-full p-3 border rounded" required />
            <textarea placeholder="Description" value={eventData.description}
              onChange={(e) => handleChange("description", e.target.value)} className="w-full p-3 border rounded" required />
            <input type="date" value={eventData.date}
              onChange={(e) => handleChange("date", e.target.value)} className="w-full p-3 border rounded" required />
            <input type="time" value={eventData.time}
              onChange={(e) => handleChange("time", e.target.value)} className="w-full p-3 border rounded" required />
          </div>

          <div className="space-y-4">
            <input type="text" placeholder="Location" value={eventData.location}
              onChange={(e) => handleChange("location", e.target.value)} className="w-full p-3 border rounded" required />
            <input type="number" placeholder="Price (₹)" value={eventData.price}
              onChange={(e) => handleChange("price", e.target.value)} className="w-full p-3 border rounded" />
            <input type="text" placeholder="Category" value={eventData.category}
              onChange={(e) => handleChange("category", e.target.value)} className="w-full p-3 border rounded" required />
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full p-3 border rounded" accept="image/*" />
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              Create Event
            </Button>
          </div>
        </form>

        {/* Preview Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Created Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event._id} className="bg-white/70 border p-6 rounded-xl shadow flex flex-col">
              {event.image && (
                <img src={`http://localhost:5000/uploads/${event.image}`}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{event.date}</span>
                <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{event.time}</span>
                <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{event.location}</span>
                <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1" />₹{event.price}</span>
                <span className="flex items-center"><Users className="h-4 w-4 mr-1" />{event.category}</span>
              </div>

              <Link to={`/guest-management/${event._id}`}>
                <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  Manage Guests
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EasyEventCreation;
