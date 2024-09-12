
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Bookings from './Pages/Bookings/Bookings';
import Vehicle from './components/Vehicles/Vehicle';
import VehicleDetailsPage from './Pages/VehicleDetailsPage/VehicleDetailsPage';
import CustomerDetails from './Pages/VehicleDetailsPage/CustomerDetails';
import ConfirmationPage from './Pages/VehicleDetailsPage/ConfirmationPage';
import Preview from './Pages/Preview';

function App() {
  return (
    <div >
       <BrowserRouter>
       
       <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/bookings' exact Component={Bookings}/>
        <Route path='/vehicles' exact Component={Vehicle}/>
        <Route path='/vehicle/:id' exact Component={VehicleDetailsPage}/>
        <Route path="/book/:id" exact Component={CustomerDetails} />
        <Route path="/confirm" exact Component={ConfirmationPage} />
        <Route path="/preview" exact Component={Preview} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
