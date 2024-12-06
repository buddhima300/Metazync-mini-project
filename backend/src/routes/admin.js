const express = require("express");
const { serviceModel } = require("../models/admin.model");

const adminRouter = express.Router();

adminRouter.post("/addservice", async (req, res) => {
  try {
    const addservice = new serviceModel({ service: req.body.service });
    await serviceModel.create(addservice);
    console.log("service is added");
    res.status(200).json("Service is added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Error in adding service");
  }
});
adminRouter.get("/getservice", async (req, res) => {
  try {
    const services = await serviceModel.find();
    res.status(200).json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error in fetching services");
  }
});

// adminRouter.put("/bookings", updateService);
// adminRouter.delete("/bookings", deleteService);

module.exports = adminRouter;
