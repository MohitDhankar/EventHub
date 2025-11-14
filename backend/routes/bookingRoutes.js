const express = require("express");
const { bookEvent, getUserBookings } = require("../controllers/bookingController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, bookEvent);
router.get("/my-bookings", protect, getUserBookings);

module.exports = router;
