import React, { useEffect, useState } from "react";
import "../styles/booking-list.css";
import axios from "axios";

function BookinForm() {
  const [services, setServices] = useState([]);
  const [CustomerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [datetime, setDatetime] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://localhost:5000/admin/getservice"
      );
      try {
        if (response.status === 200) {
          console.log(response.data);
          setServices(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    console.log("this is user id: ", userId);
    const formatDateTime = new Date(datetime).toISOString();
    const BookingData = {
      CustomerName,
      address,
      datetime: formatDateTime,
      service,
      userId: userId, // this is used as foreign key of user
    };
    console.log(BookingData);
    const response = await axios.post(
      "http://localhost:5000/api/bookings",
      BookingData
    );
    if (response.status === 200) {
      console.log(response.data);
      alert(`Your Booking is set successfully`);
    }
  };

  return (
    <div className="booking-container">
      <h1>BOOKNOW</h1>

      <form class="max-w-sm mx-auto" onSubmit={handleBooking}>
        <div class="mb-5">
          <label
            for="Name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Customer Name
          </label>
          <input
            type="text"
            name="cutomerName"
            value={CustomerName}
            onChange={(e) => setCustomerName(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your address"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date and Time
          </label>
          <input
            type="datetime-local"
            name="datetime"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="service"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Service Type
          </label>
          <select
            service="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" defaultChecked>
              Select Service Type
            </option>
            {/* Map over services to create options */}
            {services.map((service) => (
              <option key={service.id} value={service.value}>
                {service.service}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Booking
        </button>
      </form>
    </div>
  );
}

export default BookinForm;
