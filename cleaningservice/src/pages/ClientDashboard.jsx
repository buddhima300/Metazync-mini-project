import React from "react";
import Navbar from "../components/Navbar";
import BookingList from "../components/BookingList";
import BookinForm from "./BookinForm";
import "../styles/dashboard.css";

export default function ClientDashboard() {
  return (
    <div className="dash-container">
      <div className="sub-container">
        <div className="panel1">
          <Navbar />
          <BookingList />
        </div>
        <div className="panel2">
          <BookinForm />
        </div>
      </div>
    </div>
  );
}
