import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './Logo.jpg';
import { Menu } from 'lucide-react';
import { UserPen, MoveLeft } from 'lucide-react';

const Header = ({ userRole }) => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  
  const location = useLocation();

  const userMenuItems = [
    { name: "MakeBooking", path: "/user/make-booking" },
    { name: "BookingHistory", path: "/user/booking-history" },
  ];

  const employeeMenuItems = [
    { name: "BookingManagement", path: "/employee/booking-management" },
    { name: "DeliveryManagement", path: "/employee/delivery-management" },
    { name: "VehicleManagement", path: "/employee/vehicle-management" },
  ];

 
  const menuItems = userRole === "employee" ? employeeMenuItems : userMenuItems;

  
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      
      <div className='bg-slate-100 sticky top-0 z-50 mx-auto flex w-full  items-center h-12 shadow-md'>
        <Menu className='sm:hidden h-10 w-16 cursor-pointer mr-4' onClick={() => setMenuOpen(!menuOpen)} />
        <img src={logo} className='logo w-16 h-10 rounded-xl ml-auto sm:ml-4' alt='Logo' />
        <div className='grow h-14 hidden sm:flex  place-items-center px-10 flex-row space-x-3 font-semibold'>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`cursor-pointer ${isActive(item.path) ? 'text-sky-500 font-bold' : 'text-gray-700 '}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        
        <div className='flex-row mr-10 hidden sm:flex '>
         
         <p className='font-semibold ml-2'>Help</p>
         <p className='ml-2'>|</p>
         
         <UserPen className='h-6 w-6 mt-1 ml-2 ' onClick={() => setOpen(!open)} />
        </div>
        {open && (
           <div className='bg-white p-4 w-64 h-64 shadow-lg absolute top-12 right-4'>
             <ul className='flex flex-col items-center'>
               <UserPen className='h-16 w-16 bg-slate-600 rounded-full' />
                 <p className='mt-2 text-center'>User Name</p>
                   <hr className='w-1/2 border-t-2 border-gray-300 my-2' />
                     <div className='w-full '>
                      <li className='text-left'>Profile</li>
                       <button className='bg-white  mt-2 hover:bg-red-300'>
                         Sign Out
                       </button>
                     </div>
               </ul>
            </div>
         )}

      </div>
      {menuOpen &&
        <div className='sm:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-4'>
          <button className='mb-4' onClick={() => setMenuOpen(false)}><MoveLeft /></button>
          <UserPen className='h-16 w-16 ml-24 bg-slate-200 rounded-3xl' />
          <p className='ml-20 mt-3'>USER NAME</p>
          <hr className='text-gray-600' />
          <ul className='pt-2 mt-2' onClick={() => setMenuOpen(false)}>
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path}
              className={`cursor-pointer ${isActive(item.path) ? 'text-sky-500 font-bold' : 'text-gray-700 '}`}
              ><li >{item.name}</li></Link>
            ))}
            <li>Help</li>
            <li>Profile</li>
            <li>
              <button className='bg-white border-red-400 p-1 rounded-lg mt-2 hover:bg-red-300'>Sign Out</button>
            </li>
          </ul>
        </div>
         }
    </div>
  );
};

export default Header;
