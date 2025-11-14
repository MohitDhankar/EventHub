const Booking = require("../models/Booking");

exports.bookEvent = async (req, res) => {
  const booking = await Booking.create({
    user: req.user.id,
    event: req.body.eventId,
    seats: req.body.seats,
  });
  res.json(booking);
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("event");
  res.json(bookings);
};
