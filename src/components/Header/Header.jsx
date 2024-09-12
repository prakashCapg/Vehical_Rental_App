import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav >
        <div >
          
        <ul className="flex space-x-4 items-center text-black py-6 px-8 md:px-32 bg-blue-300 drop-shadow-md">

            <Link to='/'><li>Home</li></Link>
            <Link to='/vehicles'><li>Vehicles</li></Link>
            <Link to='/bookings'><li>MyBooking</li></Link>
             <li>About</li>
             
        </ul>
       
        </div>
      </nav>
    </div>
  )
}

export default Navbar
