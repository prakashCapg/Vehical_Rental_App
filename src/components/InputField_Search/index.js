import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce';
import {  useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { getBookingDetails } from '../../services/booking-details.service';

const InputField_Search = ({apiEndPoint , navigation}) => {
    const [searchTerm,setSearchTerm]=useState('');
    const[data,setData]=useState([]);
    const navigate = useNavigate();
    const debouncedSearchTerm= useDebounce(searchTerm,500);
    useEffect(()=>{
      if(debouncedSearchTerm){
        console.log('searching for',debouncedSearchTerm);
      }
      else{
        console.log('somthing else..')
        
      }
    },[debouncedSearchTerm])

    

    const handlerSearch=()=>{
      const response = getBookingDetails(debouncedSearchTerm);
         if(response.success){
          navigate(`${navigation}`,{state : {bookingId : searchTerm}});
         }
        
    }

  return (
    <div className='felx items-center justify-start '>
      <div className='relative flex'>     
      <input type='text' placeholder='SEARCH BY BOOKING ID' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  />
      <button className="p-2 bg-blue-950 text-white "onClick={handlerSearch}>
        <Search  />
      </button>
      </div>  
      
    </div>
  )
}

export default InputField_Search

