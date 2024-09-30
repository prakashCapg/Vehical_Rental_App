import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/HomePage.jsx";
import Makebooking from "./Pages/MakeBooking/index.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BookingHistory from "./Pages/BookingHistory/BookingHistory.js";
import VehicleList from "./Pages/VehicleList/index.js";
import VehicleDetails from "./Pages/VechileDetails/index.js";
import BookingConfirm from "./Pages/BookingConfirm/index.js";
import Preview from "./Pages/Preview/index.js";
import VehicleManagement from "./Pages/VehicleManagement/index.js";
import VehicleContextProvider from "./context/VehicleContextProvider.js";
import BookingManagement from "./Pages/BookingManagement/index.js";
import DeliveryManagement from "./Pages/DeliveryManagement/index.js";
import BookingDetails from "./Pages/Preview/BookingDetails.js";
import SendForPreparation from "./Pages/SendForPreparation/index.js";
import Deliverd from "./Pages/Delivered/index.js";
import UnderForPreparation from "./Pages/UnderPreparation/index.js";
import ReadyForDelivery from "./Pages/ReadyForDelivery/index.js";

function App() {
  return (
    <div>
      <VehicleContextProvider>
        <BrowserRouter>
          <Header userRole="employee"/>
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
              path="/user/vehicle-details"
              exact
              Component={VehicleDetails}
            />
            <Route
              path="/user/booking-confrim"
              exact
              Component={BookingConfirm}
            />
            <Route path="/preview" exact Component={Preview} />
           


            {/* for empolyee routing */}
            <Route path='/employee/booking-management' exact Component={BookingManagement}/>
            <Route path='/employee/delivery-management' exact Component={DeliveryManagement} />
            <Route path='/employee/vehicle-management' exact Component={VehicleManagement} />
            <Route path="/booking-details" element={<BookingDetails />} />
            <Route path='/employee/delivery-management/send-for-preparation' exact Component={SendForPreparation}/>
            <Route path='/employee/delivery-management/ready-for-delivery' exact Component={ReadyForDelivery}/>
            <Route path='/employee/delivery-management/under-for-preparation' exact Component={UnderForPreparation}/>
            <Route path='/employee/delivery-management/delivered' exact Component={Deliverd}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </VehicleContextProvider>
    </div>
  );
}

export default App;
