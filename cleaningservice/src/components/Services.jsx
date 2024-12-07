import React, { useState } from "react";
import "../styles/services.css";
import axios from "axios";

function Services() {
  const [service, setService] = useState("");
  const handleAdd = async (e) => {
    e.preventDefault();

    const addedService = {
      service: service,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/addservice",
        addedService
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function to update service
  const handleEdit = async (e) => {
    e.preventDefault();

    const newservice = prompt("Enter the new service");
    const updateService = {
      service: service,
      NewService: newservice,
    };
    try {
      const response = await axios.put(
        "http://localhost:5000/admin/updateservice",
        updateService
      );
      if (response.status === 200) {
        console.log(response.data);
        alert("Service is Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function to delete service
  const handleDelete = async (e) => {
    e.preventDefault();

    // const newservice = prompt("Enter the new service");
    const DeleteService = { service: service }; // this should be pass as the part of the data object in delete method
    try {
      const response = await axios.delete(
        "http://localhost:5000/admin/deleteservice",
        { data: DeleteService }
      );
      if (response.status === 200) {
        console.log(response.data);
        alert("Service is Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="services-container">
      <h1>SERVICE MANAGMENT </h1>

      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="service"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add More Services
          </label>
          <input
            type="text"
            name="service"
            onChange={(e) => setService(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Service Type here"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleAdd}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Service
        </button>
        <button
          type="button"
          onClick={handleEdit}
          class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit Service
        </button>
        <button
          type="button"
          onClick={handleDelete}
          class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete Service
        </button>
      </form>
    </div>
  );
}

export default Services;
