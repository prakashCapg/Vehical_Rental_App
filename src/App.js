import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/HomePage.jsx';
import Makebooking from "./pages/MakeBooking/index.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BookingHistory from './pages/BookingHistory/BookingHistory.js';
import VehicleList from "./pages/VehicleList/index.js";
import VehicleDetails from "./pages/VechileDetails/index.js";
import BookingConfirm from "./pages/BookingConfirm/index.js";
import Preview from "./pages/preview/index.js";
import VehicleManagement from "./pages/VehicleManagement/index.js";
import VehicleContextProvider from "./context/VehicleContextProvider.js";
import DeliveryManagement from "./pages/DeliveryManagement/index.js";
import SendForPreparation from "./pages/SendForPreparation/index.js";
import UnderForPreparation from "./pages/UnderPreparation/index.js";
import ReadyForDelivery from "./pages/ReadyForDelivery/index.js";
import Deliverd from "./pages/Delivered/index.js";
import BookingDetails from "./pages/BookingDetails/index.js";
import BookingManagement from "./pages/BookingManagement/index.js";
import{ DateProvider} from './context/DateContext.js'
import AddVehicle from './pages/AddVehicle/index.js'
function App() {
  return (
    <div>
      <DateProvider>
      <VehicleContextProvider>
        <BrowserRouter>
          <Header userRole={'employee'}/>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/user/make-booking" exact Component={Makebooking} />
            <Route path="/user/booking-history" exact Component={BookingHistory}/>
            <Route path="/user/vehicle-booking" exact Component={VehicleList} />
            <Route path="/user/vehicle-details" exact Component={VehicleDetails}/>
            <Route path="/user/booking-confrim" exact Component={BookingConfirm}/>
            <Route path="/preview" exact Component={Preview} />
            <Route
              path="/employee/vehicle-management"
              exact
              Component={VehicleManagement}
            />
            <Route path="/employee/Add-vehicle" exact Component={AddVehicle} />

            <Route
              path="/employee/delivery-management"
              exact
              Component={DeliveryManagement}
            />
            <Route
              path="/employee/booking-details"
              exact
              Component={BookingDetails}
            />
            <Route
              path="/employee/delivery-management/send-for-preparation"
              exact
              Component={SendForPreparation}
            />
            <Route
              path="/employee/delivery-management/under-for-preparation"
              exact
              Component={UnderForPreparation}
            />
            <Route
              path="/employee/delivery-management/ready-for-delivery"
              exact
              Component={ReadyForDelivery}
            />
            <Route
              path="/employee/delivery-management/delivered"
              exact
              Component={Deliverd}
            />
            <Route path="/employee/booking-management" exact Component={BookingManagement}/>

          </Routes>
          <Footer />
        </BrowserRouter>
      </VehicleContextProvider>
      </DateProvider>
    </div>
  );
}
export default App;
