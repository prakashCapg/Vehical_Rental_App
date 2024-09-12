import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDetails = () => {
  const navigate = useNavigate();
 

  const handleProceed = () => {
    navigate('/confirm');
  };

  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Customer Details</h2>
      <button onClick={handleBack} className='w-[80px] py-2 bg-blue-700 border-gray-300 text-white rounded-lg hover:bg-blue-300 ml-5 mt-5'  >Back</button>
      <button onClick={handleProceed} className='w-[80px] py-2 bg-blue-700 border-gray-300 text-white rounded-lg hover:bg-blue-300 ml-5'>Proceed</button>
    </div>
  );
};

export default CustomerDetails;
