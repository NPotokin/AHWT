import React from 'react'
import {GoLocation} from 'react-icons/go'
import {FiPhone} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'

const Hospital = (props) => {
  return (
    <div className='mx-3'>

      <div className='container flex flex-col'>
      
        <div className='m-4 py-4 text-4xl lg:text-7xl xl:text-8xl font-bold text-center'>
          {props.hospitalName}
        </div>

        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
         
          {/*Contact Info */}
          <div className="flex flex-col rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-primary border-4">
            <div className='my-2  font-bold text-2xl xl:text-4xl text-secondary'>Contact Info</div>

            <div className="flex flex-row mx-auto mt-2">
              <GoLocation className='text-secondary mx-2' size={25} />
              <div className='font-bold text-lg'>Adress</div>
            </div>
            <div className='font-semibold text-md'>{props.street}</div>
            <div className='font-semibold text-md'>{props.city}</div>
            <div className='font-semibold text-md'>{props.zip}</div>

            <div className="flex flex-row mx-auto mt-2">
              <FiPhone className='text-secondary mx-2' size={25} />
              <div className='font-bold text-lg'>Phone</div>
            </div>
            <div className=' text-md'>{props.phone}</div>

            <div className="flex flex-row mx-auto mt-2">
              <CgWebsite className='text-secondary mx-2' size={25} />
              <div className='font-bold text-lg'>Website</div>
            </div>
            <div className='font-semibold text-md'>{props.website}</div>
          </div>
        
        
        
          <div className="rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-4 border-primary">{props.stat}</div>
          <div className="rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-primary border-4">{props.hourGraph}</div>
          <div className="rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-4 border-primary">{props.dayGraph}</div>
          <div className="rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-4 border-primary">{props.weekGraph}</div>
          <div className="rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-4 border-primary p-3 text-justify">{props.aboutInfo}</div>
        </div>
          
          
          
          
          
          
          
          
        </div>

    </div>

      
    
  )
}

export default Hospital