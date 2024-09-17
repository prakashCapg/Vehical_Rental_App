
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage.jsx';
import Makebokking from './Pages/MakeBooking/index.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import BookingHistory from './Pages/BookingHistory/index.js';
import VehicleList from './Pages/VehicleList/index.js';
import VehicleDetails from './Pages/VechileDetails/index.js';
import BookingConfirm from './Pages/BookingConfirm/index.js';
import Preview from './Pages/Preview/index.js'
function App() {
  return (
    <div >
       <BrowserRouter>
       <Header />
       <Routes>
        <Route path='/' exact Component={Home}/>
         <Route path='/user/make-booking' exact Component={Makebokking}/>
         <Route path='/user/booking-history' exact Component={BookingHistory} />
         <Route path='/user/vehicle-booking' exact Component={VehicleList}/>
         <Route path='/user/vehicle-details' exact  Component={VehicleDetails}/>
         <Route path='/user/booking-confrim' exact Component={BookingConfirm}/>
        <Route path="/preview" exact Component={Preview} />
       </Routes>
       <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
