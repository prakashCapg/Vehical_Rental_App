import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Bookings from "./pages/Bookings/Bookings";
import Vehicle from "./components/Vehicles/Vehicle";
import VehicleDetailsPage from "./pages/VehicleDetailsPage/VehicleDetailsPage";
import CustomerDetails from "./pages/VehicleDetailsPage/CustomerDetails";
import ConfirmationPage from "./pages/VehicleDetailsPage/ConfirmationPage";
import Preview from "./pages/preview";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/bookings" exact Component={Bookings} />
          <Route path="/vehicles" exact Component={Vehicle} />
          <Route path="/vehicle/:id" exact Component={VehicleDetailsPage} />
          <Route path="/book/:id" exact Component={CustomerDetails} />
          <Route path="/confirm" exact Component={ConfirmationPage} />
          <Route path="/preview" exact Component={Preview} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
