import React from 'react'
import img from '../../assests/img1.jpg'

const Card1 = () => {
    
  return (
        <div>
            {/* my cards */}
           <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4 justify-items-center ml-5 mr-5'>
            {/* padding */}
              <div  className='py-2 px-2 bg-slate-400 rounded-lg '>
                  <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                   <img src={img} alt='' className='w-full'/>
                  </div>
                  <div className='px-2 py-2 flex flex-row justify-between'>
                      <h4 className='text-bold'>Tesla Model S</h4>
                      <p>Price/Day : $890</p>
                  </div>
              </div>
            
           </div>
        </div>
  )
}

export default Card1
