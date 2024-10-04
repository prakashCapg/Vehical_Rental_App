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
import AddVehicle from "./pages/AddVehicle/index.js";
import VehicleContextProvider from "./context/VehicleContextProvider.js";
function App() {
  return (
    <div>
      <VehicleContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/user/make-booking" exact Component={Makebooking} />
            <Route
              path="/user/booking-history"
              exact
              Component={BookingHistory}
            />
            <Route path="/user/vehicle-booking" exact Component={VehicleList} />
            <Route
              path="/user/vehicle-details/:vehicleId"
              element={<VehicleDetails />}
            />
            <Route
              path="/user/booking-confrim"
              exact
              Component={BookingConfirm}
            />
            <Route path="/preview" exact Component={Preview} />
            <Route path="/admin/add-vehicle" exact Component={AddVehicle} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </VehicleContextProvider>
    </div>
  );
}

export default App;
