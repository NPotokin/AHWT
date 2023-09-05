import React from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {BsArrowLeftCircle} from 'react-icons/bs'

const EdmontonHospitalSelection = () => {

const [edmontonHospitalSelection, setEdmontonHospitalSelection] = useState(false);
const handleEdmonton = () => {
  setEdmontonHospitalSelection(!edmontonHospitalSelection);
}


  return (
    <div>
      
      <div className="container flex flex-col">

      <div className={`${edmontonHospitalSelection ? 'hidden' : 'flex flex-row my-2 justify-start group'}`}>
        <BsArrowLeftCircle  
          onClick={handleEdmonton}
          className='text-secondary group-hover:text-primary duration-1000' 
          size={35}/>
        <h1 className='font-semibold text-secondary text-2xl ml-3 group-hover:text-primary duration-1000'>Back to the city selection</h1>
     </div>

      <h1
        className={`${edmontonHospitalSelection? ' mt-12 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center' :  'hidden'}`}>
        <span className='text-secondary'>Edmonton</span> Hospital Selection
      </h1>



        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div>hi</div>
        </div>
        

        <div>
          <Outlet />
        </div>
      </div>
      
    </div>
  )
}

export default EdmontonHospitalSelection