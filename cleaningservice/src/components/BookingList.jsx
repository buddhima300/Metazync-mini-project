import React, { useEffect, useState } from "react";
import "../styles/booking-list.css";
import axios from "axios";

export default function BookingList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    handleBookingDetails();
  }, []);
  const handleBookingDetails = async (e) => {
    const response = await axios.get("http://localhost:5000/api/bookings");
    try {
      if (response.status === 200) {
        console.log(response.data);
        // console.log("user get all the data");
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="booking-list">
        {/* setting the loaded data in our elements */}
        {data.map((details) => (
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                    key={details.id}
                  >
                    {details.customer_name}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {details.address}
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {details.service_type}
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Edit
                  </button>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
