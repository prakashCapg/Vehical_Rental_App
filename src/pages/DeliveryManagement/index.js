import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import '../../index.css'
import InputField_Search from '../../components/InputField_Search';

const DeliveryManagement = () => {

  return (
    <div className='container min-h-screen'>
     <div className="box1 flex-1 p-4 text-center order-2 md:order-1 ">
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



      <div className="box2 flex-1 p-4 text-center w-full order-1 md:order-2 ">
      <InputField_Search  navigation='/employee/booking-details'/>
      </div>

      
    </div>
  );
};

export default DeliveryManagement;


