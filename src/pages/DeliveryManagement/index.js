import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const DeliveryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hints, setHints] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [reverse, setReverse] = useState(false);
  const navigate = useNavigate();

  const updateLayout = () => {
    const width = window.innerWidth;
    setReverse(width <= 768); 
  };

  useEffect(() => {
    window.addEventListener('resize', updateLayout);
    updateLayout(); 

    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

 
  useEffect(() => {
    const fetchBookings = async () => {
      if (debouncedTerm) {
        try {
          const response = await fetch('http://localhost:3002/bookings');
          const data = await response.json();
          const generatedHints = data
            .filter(item => item.bookingID.toLowerCase().includes(debouncedTerm.toLowerCase()))
            .map(item => item.bookingID);

          setHints(generatedHints);
        } catch (error) {
          console.error('Error fetching bookings:', error);
          setError('Error fetching booking data. Please try again later.');
        }
      } else {
        setHints([]);
      }
    };

    fetchBookings();
  }, [debouncedTerm]);

 
  const handleSearch = async () => {
    if (searchTerm) {
      setIsSearched(true);
      setLoading(true);
      setError('');

      try {
        const response = await fetch('http://localhost:3002/bookings');
        const data = await response.json();

        const foundBooking = data.find(
          (item) => item.bookingID.toLowerCase() === searchTerm.toLowerCase()
        );

        if (foundBooking) {
          
          navigate('/employee/booking-details', { state: { booking: foundBooking } });
        } else {
          setError(`No booking found with ID: ${searchTerm}`);
          navigate('/booking-details', { state: { booking: foundBooking } });
        }
      } catch (error) {
        console.error( error);
        setError('Error fetching booking data. Please try again later.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please enter a booking ID to search.');
    }
  };

  
  const handleHintClick = (hint) => {
    setSearchTerm(hint);
    setHints([]);
  };

  return (
    <div className={`container min-h-screen mt-10 ml-6 ${reverse ? 'reverse' : ''}`}>
     <div className="box1 ">
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-24 w-full">
      <Link to='/employee/delivery-management/send-for-preparation'>SEND FOR PREPARATION</Link> 
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 h-24 w-full">
     <Link to='/employee/delivery-management/under-for-preparation'>UNDER PREPARATION</Link> 
    </button>
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 h-24 w-full">
      <Link to='/employee/delivery-management/ready-for-delivery'>READY FOR DELIVERY</Link>
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 h-24 w-full">
      <Link to='/employee/delivery-management/delivered'>DELIVERED</Link>
    </button>
  </div>
</div>



      <div className="box2 flex flex-col items-center w-full px-4 sm:px-0 m-0">
        <div className="relative flex ">
          
          <input
            type="text"
            placeholder="SEARCH BY BOOKING ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 px-3 py-2 w-full"
          />
          <button
            className="bg-blue-950 text-white font-bold py-2 px-4 "
            onClick={handleSearch}
          >
            <Search className="h-6 w-6" />
          </button>
          
         
          {hints.length > 0 && (
            <ul className="absolute top-12 left-0 z-10 bg-white border border-gray-300 mt-1 w-full rounded shadow-lg">
              {hints.map((hint, index) => (
                <li
                  key={index}
                  onClick={() => handleHintClick(hint)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {hint}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default DeliveryManagement;
