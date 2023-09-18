import React from 'react'
import { useState } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'
import CalgaryEmergency from '../../utils/CalgaryEmergency';


const CalgaryEmergencyFacilities = () => {

  const [emergencySelection, setEmergencySelection] = useState(true);
  const handleEmergencySelection = () =>{
    setEmergencySelection(!emergencySelection);
  }

  return (
    <div>
      <div className="container flex flex-col">

      <div className={`${emergencySelection ? 'hidden' : 'flex flex-row my-2 justify-start group'}`}>
        <BsArrowLeftCircle  
          onClick={handleEmergencySelection}
          className='text-secondary group-hover:text-primary duration-1000' 
          size={35}/>
        <h1 className='font-semibold text-secondary text-2xl ml-3 group-hover:text-primary duration-1000'>
          Back to the Emergency selection</h1>
      </div>

      <h1
        className={`${emergencySelection? 'mx-3 mt-12 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center' :  'hidden'}`}>
       <span className='text-secondary'>Emergency</span> Service Selection
      </h1>

      <div className={`${emergencySelection? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' : 'hidden'}`}>
        
       {CalgaryEmergency.map((item) => (
       <div
          key={item.key}
          id={item.id}
          className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] mx-auto container relative my-2 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img 
            src={item.img} 
            alt="" 
            className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] ">
              <h1 className='py-1 text-lg md:text-xl xl:text-3xl font-semibold text-secondary group-hover:text-primary duration-1000'>{item.name}</h1>
              <h1 className='py-1 mb-4 text-justify md:text-md lg:text-lg font-medium'>{item.info}</h1>
              <Link 
              onClick={handleEmergencySelection}
              to={item.route}
              className='text-center p-3 m-3 rounded-xl md:text-md lgl:text-lg font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital page</Link>
          </div>
        </div>
          
       ))}
        
      </div>



      <div className={`${emergencySelection ? 'hidden' : 'container'}`}>
        <Outlet />
      </div>

      </div>
    </div>
  )
}

export default CalgaryEmergencyFacilities;