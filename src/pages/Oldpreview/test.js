// import React,{useEffect, useState} from 'react';
// import { Search } from 'lucide-react';
// import useDebounce from './useDebounceTest1';
// const Test = () => {
//     const[search,setSearch]=useState('');
//     const[data,setData]=useState([]);
//     const debounceSearchTerm = useDebounce(search,200);
//     useEffect(()=>{
//       if(debounceSearchTerm){
//         // console.log('search term',debounceSearchTerm);
//         apif(debounceSearchTerm);
//       }else{
//         console.log('something else..')
//       }
//     },[]);
//     const apif=(bookingid)=>{
//           fetch(`http://localhost:3002/bookings`)
//           .then((res)=>res.json())
//           .then((response)=>{
//             console.log('Response',response);
//             setData(response);
//           })
//     }
//   return (
//     <div className="min-h-screen flex  items-center justify-center gap-10">
        
//       <div className="grid grid-cols-2 gap-4">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 ">
//           SEND FOR PREPARATION
//         </button>
//         <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-10 px-4 ">
//           UNDER PREPARATION
//         </button>
//         <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-10 px-4 ">
//           READY FOR DELIVERY
//         </button>
//         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-10 px-4 ">
//           DELIVERED
//         </button>
//       </div>
      
//       <div className='flex '>
//         <input
//           type="text"
//           placeholder="SEARCH BY BOOKING ID"
//           className="border border-gray-400 px-3 py-2 "
//           onChange={(e)=>setSearch(e.target.value)}
//           value={search}
//         />
//         <button className="bg-blue-950  text-white font-bold py-2 px-4 ">
//           <Search className="h-6 w-6" /> 
//         </button>
//       </div>
//       {data}
//     </div>
//   );
// };

// export default Test;
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hints, setHints] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const navigate = useNavigate();

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
      setIsSearched(true); // Set to true when searching
      setLoading(true);
      setError('');

      try {
        const response = await fetch('http://localhost:3002/bookings');
        const data = await response.json();

        const foundBooking = data.find(
          (item) => item.bookingID.toLowerCase() === searchTerm.toLowerCase()
        );

        if (foundBooking) {
          navigate('/booking-details', { state: { booking: foundBooking } });
        } else {
          setError(`No booking found with ID: ${searchTerm}`);
        }
      } catch (error) {
        console.error('Error fetching booking:', error);
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
    <div className="container reverse">
      <div className="first grid grid-cols-2 gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-32 w-62">
          SEND FOR PREPARATION
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ">
          UNDER PREPARATION
        </button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 h-32 w-62">
          READY FOR DELIVERY
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ">
          DELIVERED
        </button>
      </div>

      <div className=" second flex flex-col items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH BY BOOKING ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded"
          />
          <button
            className="bg-blue-950 text-white font-bold py-2 px-4 ml-2"
            onClick={handleSearch}
          >
            <Search className="h-6 w-6" />
          </button>

          {hints.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded shadow-lg">
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

      {loading && <p>Loading booking details...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default  Test;
