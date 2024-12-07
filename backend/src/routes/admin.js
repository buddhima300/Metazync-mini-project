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
//service updating
adminRouter.put("/updateservice", async (req, res) => {
  try {
    const oldservice = req.body;
    // console.log("this is new service: ", oldservice.NewService);
    const newone = oldservice.NewService;
    const service = await serviceModel.findOne({ service: oldservice.service });
    const serviceId = service._id;
    if (serviceId) {
      const updated = await serviceModel.findByIdAndUpdate(
        serviceId,
        { $set: { service: newone } },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log("service is updates");
      res.status(200).json("Service is updated successfully");
    } else {
      res.status(404).json("Service not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Error in fetching services");
  }
});

//delete service
adminRouter.delete("/deleteservice", async (req, res) => {
  try {
    const oldservice = req.body;
    console.log(oldservice);
    const service = await serviceModel.findOne({ service: oldservice.service });
    const serviceId = service._id;
    if (serviceId) {
      const deleted = await serviceModel.findByIdAndDelete(serviceId);
      console.log("service is deleted");
      res.status(200).json("Service is deleted successfully");
    } else {
      res.status(404).json("Service not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Error in deleting service");
  }
});

module.exports = adminRouter;
