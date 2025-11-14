const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  amount: Number,
  status: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
