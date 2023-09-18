import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {BsArrowLeftCircle} from 'react-icons/bs'
import CitySelect from '../utils/CitySelect'


const 
CitySelection = () => {

const [selectionVisibility, setSelectionVisibility] = useState(true);

const handleCityVisibiluty = () => {
  setSelectionVisibility(!selectionVisibility);
}



  return (

    <div className='container flex flex-col mx-auto text-center my-8'>
    <h1
     className={`${selectionVisibility ? ' mt-12 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center' : 'hidden'}`}>
    Choose <span className='text-secondary'>the City</span> in Alberta
    </h1>

    
    <div className={`${selectionVisibility ? 'hidden' : 'flex flex-row my-2 justify-start group'}`}>
      <BsArrowLeftCircle  
        onClick={handleCityVisibiluty}
        className='text-secondary group-hover:text-primary duration-1000' 
        size={35}/>
      <h1 className='font-semibold text-secondary text-2xl ml-3 group-hover:text-primary duration-1000'>Back to the city selection</h1>
    </div>

    
      <div 
        className={`${selectionVisibility ? 'grid mx-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' : 'hidden'}`} >
      {CitySelect.map((item) => (
      <div 
        key={item.key}
        className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] mx-auto relative mt-3 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
        <img src={item.img} 
             alt="" 
             className="xl:w-[400px] xl:h-[400px] object-cover rounded-3xl w-[300px] h-[300px] bg-primary opacity-30" />
        <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>{item.name}</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>{item.info}</h1>
            <Link 
            onClick={handleCityVisibiluty}
            to={item.route}
            className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Chose Service</Link>
        </div>
      </div>
      ))}
    </div>
    
    

    <div className={`${selectionVisibility ? 'hidden' : 'container'}`} >
      <Outlet />
    </div>
    

    </div>
  )
}

export default CitySelection;