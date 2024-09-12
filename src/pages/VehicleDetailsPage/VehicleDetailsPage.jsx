import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VehicleDetailsPage = () => {
    
    const navigate= useNavigate();
    const handleButton = (id)=>{
        navigate('/book/${id}');
    }
  return (
    <div>
      <h1>VehicleDetails page</h1> 
      <button onClick={()=>handleButton('1')} className='w-[80px] py-2 bg-blue-700 border border-gray-300 text-white rounded-1g hover:bg-blue-300 duration-300 mt-6 ml-3'>BookNow</button>
    </div>
  )
}

export default VehicleDetailsPage
