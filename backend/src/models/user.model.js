const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const bookingSchema = new mongoose.Schema({
  customer_name: String,
  address: String,
  date_time: Date,
  service_type: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const users = mongoose.model("users", usersSchema);
const BookingModel = mongoose.model("Bookings", bookingSchema);
module.exports = { users, BookingModel };
