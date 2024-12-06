const express = require("express");
const { users, BookingModel } = require("../models/user.model");
const usersRouter = express.Router();

// add new user for system
usersRouter.post("/signup", async (req, res) => {
  try {
    const adduser = new users({
      username: req.body.username,
      password: req.body.password,
    });
    await users.create(adduser);
    res.status(200).json(adduser);
  } catch (error) {
    console.error(error);
  }
});
// add new user for system
usersRouter.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await users.findOne({ username: username });
    console.log(user);
    if (user) {
      if (user.password === password) {
        res.status(200).json({
          userName: user.username,
          Password: user.password,
          userId: user.id,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
});

usersRouter.post("/bookings", async (req, res) => {
  try {
    // add new booking
    // const { customerName, address, datetime, service } = req.body;
    const BookinData = req.body;
    // console.log(BookinData);
    const customerName = BookinData.CustomerName;
    const address = BookinData.address;
    const datetime = BookinData.date_time;
    const service = BookinData.service;
    var userId = BookinData.userId;

    const addbooking = new BookingModel({
      customer_name: customerName,
      address: address,
      date_time: datetime,
      service_type: service,
      userId: userId,
    });
    await BookingModel.create(addbooking);
    console.log(addbooking);
    res.status(200).json(addbooking);
  } catch (error) {
    console.log(error);
  }
});

usersRouter.get("/bookings", async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    console.log(bookings);
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
  }
});

// usersRouter.put("/bookings/:id", updateBookings);
// usersRouter.get("/bookings", deleteBookings);

module.exports = usersRouter;
