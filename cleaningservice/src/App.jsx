import "./App.css";
import ClientDashboard from "./pages/ClientDashboard";
import UserRegForm from "./pages/UserRegForm";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoging from "./pages/UserLoging";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserRegForm />} />
            <Route path="/signpage" element={<UserLoging />} />
            <Route path="/clientdashboard" element={<ClientDashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/Admin" element={<AdminLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
