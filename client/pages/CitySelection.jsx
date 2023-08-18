import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const 
CitySelection = () => {
  return (
    <div className='container flex flex-col mx-auto text-center'>
    <h1
     className=' mt-12 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
    Choose <span className='text-secondary'>the City</span> in Alberta
    </h1>

    <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
     
      <div className='border-4 border-secondary rounded-3xl h-[300px] hover:border-primary duration-1000'>
        <h1>Calgary</h1>
        <h1>Some info</h1>
        <Link>Go to Service selection</Link>
      </div>

      

    </div>
    

    <Link to='calgary' className='text-4xl'>Calgary </Link>
    <Outlet />
    </div>
  )
}

export default CitySelection;