import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Footer from "../components/Footer";
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";

const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5000/api/events");
    setEvents(res.data);
  };

  useEffect(() => { fetchEvents(); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center">Explore Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event._id} className="overflow-hidden bg-white/80 hover:shadow-xl transition-shadow border border-white/30">
              <div className="relative h-48 bg-gradient-to-r from-purple-400 to-blue-400">
                <img
  src={
    event.image
      ? `http://localhost:5000/uploads/${event.image}`
      : "https://via.placeholder.com/400x300?text=No+Image"
  }
  alt={event.title}
  className="w-full h-full object-cover"
/>
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{event.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{event.title}</CardTitle>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-600 text-sm">
                <p><Calendar className="inline h-4 w-4 mr-1" /> {event.date}</p>
                <p><Clock className="inline h-4 w-4 mr-1" /> {event.time}</p>
                <p><MapPin className="inline h-4 w-4 mr-1" /> {event.location}</p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mt-3">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
