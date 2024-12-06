import React from "react";
import "../styles/dashboard.css";
import AdminNavbar from "../components/AdminNavbar";
import BookingList from "../components/BookingList";
import Services from "../components/Services";

function AdminDashboard() {
  return (
    <div>
      <div className="dash-container">
        <div className="panel1">
          <AdminNavbar />
          <BookingList />
        </div>
        <div className="panel2">
          <Services />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
