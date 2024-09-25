import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './Logo.jpg'
import profile from './profile.png'
import { Menu } from 'lucide-react'
import { UserPen ,MoveLeft} from 'lucide-react'
const Header = () => {
  const[open,setOpen]=useState(false);
  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <div>
    <div className='bg-slate-100 sticky top-0 x-[20] mx-auto flex w-full items-center  h-12'>

      <Menu className='sm:hidden h-10 w-16 cursor-pointer mr-4' onClick={()=>setMenuOpen(!menuOpen)}/>

      <img src={logo} className='logo w-16 h-10  rounded-xl ml-auto sm:ml-0'/>
      <div className='grow h-14  hidden sm:flex place-items-center px-10 flex-row space-x-4 font-semibold'>
      <Link to='/user/make-booking'><p>MakeBooking</p></Link>
      <Link to='/user/booking-history'><p>BookingHistory</p></Link>
      

      
      </div>
       <div className=' flex-row  mr-10 hidden sm:flex' >
        <p className='font-semibold'>Help |</p>
        <UserPen  className='h-5 mt-1 ml-2' onClick={()=>setOpen(!open)}/>
       </div>

       { open && 
       <div className='bg-white p-4 w-40 shadow-lg rounded-lg absolute top-12 right-0 mr-5'>
          <ul>
             <UserPen className='h-16 w-16 bg-slate-600 rounded-3xl items-center ml-6'/>
             <p className='ml-5 mt-2'>User Name</p>
             <hr className='w-1/2 border-t-2 border-gray-300 ml-6'/>
             <div className='my-2'>
            <li>Profile</li>
            <li><button className='bg-white  border-red-500 p-1 rounded-lg mt-2 hover:bg-red-300'>Sign Out</button></li>
            </div>
          </ul>
       </div>
       }
       
    </div>
      {menuOpen && 
         <div className='sm:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-4'>
            <button className='mb-4' onClick={()=>setMenuOpen(false)}><MoveLeft /></button>

            <UserPen className='h-16 w-16 ml-24 bg-slate-200 rounded-3xl'/>
            <p className='ml-20 mt-3'>USER NAME</p>
            <hr className='text-gray-600'/>
            <ul className='pt-2 mt-2 ' onClick={() => setMenuOpen(false)}>
            <Link to='/user/make-booking'><li className='hover:text-blue-500 '>MakeBooking</li> </Link>
            <Link to='/user/booking-history'> <li >BookingHistory</li></Link>
              <li>Help</li>
              <li>Profile</li>
              <li>
                <button className='bg-white border-red-400 p-1 rounded-lg mt-2 hover:bg-red-300'>Sign Out</button>
              </li>
            </ul>
          </div>

      }
    </div>
    
  )
}

export default Header
