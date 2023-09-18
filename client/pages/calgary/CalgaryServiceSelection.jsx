import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'

const CalgaryServiceSelection = () => {
  const [serviceSelection, setServiceSelection] = useState(true);
  const handleServiceSelection = ()=> {
    setServiceSelection(!serviceSelection)
  }
  
  return (
    <div className='container flex flex-col'>
      
      <div className={`${serviceSelection ? 'hidden' : 'flex flex-row my-2 justify-start group'}`}>
      <BsArrowLeftCircle  
        onClick={handleServiceSelection}
        className='text-secondary group-hover:text-primary duration-1000' 
        size={35}/>
      <h1 className='font-semibold text-secondary text-2xl ml-3 group-hover:text-primary duration-1000'>Back to the service selection</h1>
    </div>

      <h1
        className={`${serviceSelection? ' mt-12 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center' :  'hidden'}`}>
        <span className='text-secondary'>Calgary</span> Service Selection
      </h1>

      <div className={`${serviceSelection? 'mx-3 grid grid-cols-1 md:grid-cols-2 gap-3' : 'hidden'}`}>

      <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto relative mt-3 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
        <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
             alt="" 
             className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover rounded-3xl bg-primary opacity-30" />
        <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Emergency</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>For those who are seriously ill or injured, with potentially life-threatening conditions.</h1>
            <Link 
            onClick={handleServiceSelection}
            to='emergency'
            className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospitals</Link>
        </div>
      </div>

      <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto relative mt-3 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
        <img src="https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
             alt="" 
             className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover rounded-3xl bg-primary opacity-30" />
        <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Urgent Care</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>An option for unexpected, but non-life threatening health concerns.</h1>
            <Link 
            onClick={handleServiceSelection}
            to='urgentCare'
            className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospitals</Link>
        </div>
      </div>
      </div>

      <div className={`${serviceSelection ? 'hidden' : 'container'}`}>
        <Outlet />
      </div>
      

       
    </div>
  )
}

export default CalgaryServiceSelection