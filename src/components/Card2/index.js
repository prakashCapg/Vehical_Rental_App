import React from 'react'


const Card2 = ({image,title,price,description,features,onClick}) => {
  
  return (
    <div >
      <center>
      <div className='border border-gray-200 rounded-lg shadow-md overflow-hidden w-64  ml-2  mt-2 hover:border-gray-400'>
           <img  src={image} alt='' className='w-64 h-48 object-cover p-2' onClick={onClick} />
           <div className='px-4  flex flex-row justify-between'>
              <h2 className=' text-slate-600 mb-1 text-center'>{title}</h2>
              <p className='text-gray-600 font-semibold  text-center '>${price}/hour</p>
            
           </div>
           <div className='text-start ml-3 mb-2'>
           <p className='text-slate-400 items-start'>{description}</p>
           </div>
        </div>
        </center>
    </div>
  )
}

export default Card2
