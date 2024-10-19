import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext"; // Adjust path as necessary
import Home from "./pages/HomePage/HomePage.jsx";
import Makebooking from "./pages/MakeBooking/index.js";
import BookingHistory from "./pages/BookingHistory/BookingHistory.js";
import VehicleList from "./pages/VehicleList/index.js";
import VehicleDetails from "./pages/VechileDetails/index.js";
import BookingConfirm from "./pages/BookingConfirm/index.js";
import Preview from "./pages/Preview/index.js";
import VehicleManagement from "./pages/VehicleManagement/index.js";
import DeliveryManagement from "./pages/DeliveryManagement/index.js";
import BookingDetails from "./pages/BookingDetails/index.js";
import SendForPreparation from "./pages/SendForPreparation/index.js";
import UnderPreparation from "./pages/UnderPreparation/index.js";
import Delivered from "./pages/Delivered/index.js";
import ReadyForDelivery from "./pages/ReadyForDelivery/index.js";
import AddVehicle from "./pages/AddVehicle/index.js";
import Login from "./components/Login/index.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { logoutUser } from "./fakeAPI/User-login-fake-api.js";
import NewPreviewPage from "./pages/NewPreviewPage/index.js";

const Main = () => {
  const { user, setUser } = useContext(AuthContext); // Access user context

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        console.log(token);
        console.log(decoded);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }

    const handleActivity = () => {
      resetTimer();
    };

    const timer = setTimeout(() => {
      logout();
    }, 18000000);

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", handleActivity);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keypress", handleActivity);
    };
  }, [token]);

  const resetTimer = () => {
    const timer = setTimeout(() => {
      logout();
    }, 18000000);
    clearTimeout(timer);
  };

  const logout = () => {
    logoutUser();
    setUser("");
    alert("You've been logged out due to inactivity.");
  };

  const ProtectedRoute = ({ element, roles }) => {
    const hasAccess = user && (!roles || roles.includes(user.role));
    return hasAccess ? element : <Navigate to={user ? "/" : "/login"} />;
  };

  return (
    <div>
      <Header userRole={user.role} />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/make-booking"
          element={
            <ProtectedRoute element={<Makebooking />} roles={["user"]} />
          }
        />
        <Route
          path="/user/booking-history"
          element={
            <ProtectedRoute element={<BookingHistory />} roles={["user"]} />
          }
        />
        <Route
          path="/user/vehicle-booking"
          element={
            <ProtectedRoute element={<VehicleList />} roles={["user"]} />
          }
        />
        <Route
          path="/user/vehicle-details"
          element={
            <ProtectedRoute element={<VehicleDetails />} roles={["user"]} />
          }
        />
        <Route
          path="/user/booking-confirm"
          element={
            <ProtectedRoute element={<BookingConfirm />} roles={["user"]} />
          }
        />
        <Route
          path="/preview"
          element={
            <ProtectedRoute
              element={<Preview />}
              roles={["user"] || ["employee"]}
            />
          }
        />
        <Route
          path="/employee/vehicle-management"
          element={
            <ProtectedRoute
              element={<VehicleManagement />}
              roles={["employee"]}
            />
          }
        />
        <Route
          path="/employee/add-vehicle"
          element={
            <ProtectedRoute element={<AddVehicle />} roles={["employee"]} />
          }
        />
        <Route
          path="/employee/delivery-management"
          element={
            <ProtectedRoute
              element={<DeliveryManagement />}
              roles={["employee"]}
            />
          }
        />
        <Route
          path="/employee/booking-details"
          element={
            <ProtectedRoute element={<BookingDetails />} roles={["employee"]} />
          }
        />
        <Route
          path="/employee/delivery-management/send-for-preparation"
          element={
            <ProtectedRoute
              element={<SendForPreparation />}
              roles={["employee"]}
            />
          }
        />
        <Route
          path="/employee/delivery-management/under-for-preparation"
          element={
            <ProtectedRoute
              element={<UnderPreparation />}
              roles={["employee"]}
            />
          }
        />
        <Route
          path="/employee/delivery-management/ready-for-delivery"
          element={
            <ProtectedRoute
              element={<ReadyForDelivery />}
              roles={["employee"]}
            />
          }
        />
        <Route
          path="/employee/delivery-management/delivered"
          element={
            <ProtectedRoute element={<Delivered />} roles={["employee"]} />
          }
        />
        <Route
          path="/new-preview"
          element={
            <NewPreviewPage />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
