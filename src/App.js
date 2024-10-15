import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage.jsx";
import Makebooking from "./pages/MakeBooking/index.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BookingHistory from "./pages/BookingHistory/BookingHistory.js";
import VehicleList from "./pages/VehicleList/index.js";
import VehicleDetails from "./pages/VechileDetails/index.js";
import BookingConfirm from "./pages/BookingConfirm/index.js";
import Preview from "./pages/preview/index.js";
import VehicleManagement from "./pages/VehicleManagement/index.js";
import { VehicleContextProvider } from "./context/VehicleContextProvider.js";
import DeliveryManagement from "./pages/DeliveryManagement/index.js";
import SendForPreparation from "./pages/SendForPreparation/index.js";
import UnderForPreparation from "./pages/UnderPreparation/index.js";
import ReadyForDelivery from "./pages/ReadyForDelivery/index.js";
import Delivered from "./pages/Delivered/index.js"; // Correct name
import BookingDetails from "./pages/BookingDetails/index.js";
import BookingManagement from "./pages/BookingManagement/index.js";
import { DateProvider } from "./context/DateContext.js";
import AddVehicle from "./pages/AddVehicle/index.js";
import BookingConfirmation from "./pages/BookingConfirmation/index.js";

function App() {
  return (
    <div>
      <DateProvider>
        <VehicleContextProvider>
          <BrowserRouter>
            <Header userRole={"user"} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/make-booking" element={<Makebooking />} />
              <Route
                path="/user/booking-history"
                element={<BookingHistory />}
              />
              <Route path="/user/vehicle-booking" element={<VehicleList />} />
              <Route path="/vehicle/:id" element={<VehicleDetails />} />
              <Route
                path="/user/booking-confrim"
                element={<BookingConfirm />}
              />
              <Route
                path="/user/Booking-Confirmation"
                element={<BookingConfirmation />}
              />
              <Route path="/preview" element={<Preview />} />
              <Route
                path="/employee/vehicle-management"
                element={<VehicleManagement />}
              />
              <Route path="/employee/Add-vehicle" element={<AddVehicle />} />
              <Route
                path="/employee/delivery-management"
                element={<DeliveryManagement />}
              />
              <Route
                path="/employee/booking-details"
                element={<BookingDetails />}
              />
              <Route
                path="/employee/delivery-management/send-for-preparation"
                element={<SendForPreparation />}
              />
              <Route
                path="/employee/delivery-management/under-for-preparation"
                element={<UnderForPreparation />}
              />
              <Route
                path="/employee/delivery-management/ready-for-delivery"
                element={<ReadyForDelivery />}
              />
              <Route
                path="/employee/delivery-management/delivered"
                element={<Delivered />}
              />
              <Route
                path="/employee/booking-management"
                element={<BookingManagement />}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </VehicleContextProvider>
      </DateProvider>
    </div>
  );
}

export default App;
