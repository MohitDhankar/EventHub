import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { DollarSign, Calendar, CheckCircle, XCircle } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "ORD1024",
      event: "Startup Pitch 2024",
      date: "2024-08-15",
      amount: 299,
      status: "Paid",
    },
    {
      id: "ORD1025",
      event: "Food & Wine Fest",
      date: "2024-09-10",
      amount: 125,
      status: "Pending",
    },
    {
      id: "ORD1026",
      event: "Business Networking Night",
      date: "2024-07-30",
      amount: 150,
      status: "Cancelled",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-gray-600">No orders placed yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white/70 backdrop-blur-sm border p-5 rounded-xl"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">#{order.id}</h3>
                  <p className="text-gray-600">Event: {order.event}</p>
                  <p className="text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-purple-600" />
                    {order.date}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-purple-600 font-bold text-lg mb-1">₹{order.amount}</p>
                  <p
                    className={`text-sm font-medium flex items-center justify-end ${
                      order.status === "Paid"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status === "Paid" && <CheckCircle className="w-4 h-4 mr-1" />}
                    {order.status === "Pending" && <DollarSign className="w-4 h-4 mr-1" />}
                    {order.status === "Cancelled" && <XCircle className="w-4 h-4 mr-1" />}
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
