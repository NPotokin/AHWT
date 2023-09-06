import React from 'react'
import { useState } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'
import CalgaryUrgent from '../../utils/CalgaryUrgent'


const CalgaryUrgentCare = () => {

  const [urgentCareSelection, setUrgentCareySelection] = useState(true);
  const handleUrgentCareSelection = () =>{
    setUrgentCareySelection(!urgentCareSelection);
  }

  return (
    <div>
      <div className="container flex flex-col">

      <div className={`${urgentCareSelection ? 'hidden' : 'flex flex-row my-2 justify-start group'}`}>
        <BsArrowLeftCircle  
          onClick={handleUrgentCareSelection}
          className='text-secondary group-hover:text-primary duration-1000' 
          size={35}/>
        <h1 className='font-semibold text-secondary text-2xl ml-3 group-hover:text-primary duration-1000'>
          Back to the Urgent Care selection</h1>
      </div>

      <h1
        className={`${urgentCareSelection? ' mt-12 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center' :  'hidden'}`}>
       <span className='text-secondary'>Urgent Care</span> Service Selection
      </h1>

      <div className={`${urgentCareSelection? 'grid grid-cols-1 lg:grid-cols-3 gap-12' : 'hidden'}`}>
        
      {CalgaryUrgent.map((item) => (
          <div 
          id={item.id}
          className='container relative my-2 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img 
            src={item.img} 
            alt="" 
            className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] ">
              <h1 className='py-1 md:text-lg lg:text-3xl font-semibold text-secondary group-hover:text-primary duration-1000'>{item.name}</h1>
              <h1 className='py-1 mb-4 text-justify md:text-md lg:text-lg font-medium'>{item.info}</h1>
              <Link 
              onClick={handleUrgentCareSelection}
              to={item.route}
              className='text-center p-3 m-3 rounded-xl md:text-md lgl:text-lg font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital page</Link>
          </div>
        </div>
       )) }

      </div>



      <div className={`${urgentCareSelection ? 'hidden' : 'container'}`}>
        <Outlet />
      </div>

      </div>
    </div>
  )
}

export default CalgaryUrgentCare