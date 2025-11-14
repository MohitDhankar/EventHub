import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Ticket, Star, DollarSign, Gift } from "lucide-react";
import { getProfile } from "../api/userApi";
import { getUserBookings } from "../api/bookingApi";
import { useToast } from "../hooks/use-toast";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const { toast } = useToast();

  const offers = [
    { code: "WELCOME50", description: "Flat ₹50 off on first booking" },
    { code: "FESTIVE20", description: "20% off on music events" },
  ];

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfileAndBookings = async () => {
      try {
        const userRes = await getProfile(token);
        setUser(userRes.data);

        const bookingsRes = await getUserBookings(token);
        setBookings(bookingsRes.data);
      } catch (err) {
        toast({
          title: "Error",
          description: "Failed to fetch profile data",
        });
      }
    };

    fetchProfileAndBookings();
  }, [token, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Profile</h1>

        {/* User Info */}
        <div className="bg-white/80 backdrop-blur-sm border p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Profile Info</h2>
          {user ? (
            <>
              <p className="text-gray-700 text-lg">Name: {user.name}</p>
              <p className="text-gray-700 text-lg">Email: {user.email}</p>
            </>
          ) : (
            <p className="text-gray-600">Loading user data...</p>
          )}
        </div>

        {/* Bookings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Ticket className="w-5 h-5 text-purple-600 mr-2" /> My Bookings
          </h2>
          {bookings.length === 0 ? (
            <p className="text-gray-600">No bookings made yet.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((b, idx) => (
                <div key={idx} className="flex justify-between items-center bg-white/70 border p-4 rounded-xl">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {b.event.title}
                    </h3>
                    <p className="text-gray-600">
                      Event Date: {new Date(b.event.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="text-purple-600 font-bold">₹{b.event.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Offers */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Gift className="w-5 h-5 text-purple-600 mr-2" /> Available Offers
          </h2>
          <div className="space-y-4">
            {offers.map((o, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white/70 border p-4 rounded-xl">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{o.code}</h3>
                  <p className="text-gray-600">{o.description}</p>
                </div>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
