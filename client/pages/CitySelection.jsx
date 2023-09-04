import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {BsArrowLeftCircle} from 'react-icons/bs'


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

    <div className={`${selectionVisibility ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'hidden'}`}>
     
      <div className=' relative mt-3 border-4 border-secondary rounded-3xl h-[350px] group hover:border-primary duration-1000'>
        <img src="https://images.pexels.com/photos/12294487/pexels-photo-12294487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
             alt="" 
             className="object-cover rounded-3xl h-[340px] bg-primary opacity-30" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Calgary</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>The largest city in Alberta and the largest metro area within the three Prairie Provinces region.</h1>
            <Link 
            onClick={handleCityVisibiluty}
            to='calgary'
            className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Chose Service</Link>
        </div>
      </div>

      <div className=' relative mt-3 border-4 border-secondary rounded-3xl h-[350px] group hover:border-primary duration-1000'>
        <img src="https://images.pexels.com/photos/280490/pexels-photo-280490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             className="object-cover rounded-3xl h-[340px] bg-primary opacity-30" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Edmonton</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>The capital city of the Canadian province of Alberta. Edmonton is situated on the North Saskatchewan River.</h1>
            <Link 
            onClick={handleCityVisibiluty}
            to='edmonton'
            className=' text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Chose Hospital</Link>
        </div>
      </div>

      <div className=' relative mt-3 border-4 border-secondary rounded-3xl h-[350px] group hover:border-primary duration-1000'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Red_Deer_-_Aerial_-_downtown_bridges.jpg/1920px-Red_Deer_-_Aerial_-_downtown_bridges.jpg"
             className="object-cover rounded-3xl h-[340px] bg-primary opacity-30" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Red Deer</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>Key industries include health care, retail trade, construction, oil and gas, hospitality, manufacturing and education.</h1>
            <Link 
            onClick={handleCityVisibiluty}
            to='redDeer'
            className=' text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Chose Hospital</Link>
        </div>
      </div> 	

      <div className=' relative mt-3 border-4 border-secondary rounded-3xl h-[350px] group hover:border-primary duration-1000'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/GPSkyline.jpg"
             className="object-cover rounded-3xl h-[340px] bg-primary opacity-30" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Grande Prairie</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>City in northwest Alberta, Canada within the southern portion of an area known as Peace River Country.</h1>
            <Link 
            onClick={handleCityVisibiluty}
            to='grandePrairie'
            className=' text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital</Link>
        </div>
      </div>

      <div className=' relative mt-3 border-4 border-secondary rounded-3xl h-[350px] group hover:border-primary duration-1000'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Downtown_Lethbridge_Skyline.jpg"
             className="object-cover rounded-3xl h-[340px] bg-primary opacity-30" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Lethbridge</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>Lethbridge is the commercial, financial, transportation and industrial centre of southern Alberta.</h1>
            <Link 
            onClick={handleCityVisibiluty}
            to='lethbridge'
            className=' text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital</Link>
        </div>
      </div> 

      <div className=' relative mt-3 border-4 border-secondary rounded-3xl h-[350px] group hover:border-primary duration-1000'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Medicine_Hat_College_View.jpg/1920px-Medicine_Hat_College_View.jpg"
             className="object-cover rounded-3xl h-[340px] bg-primary opacity-30" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Medicine Hat</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>Medicine Hat is the sunniest place in Canada according to Environment and Climate Change Canada</h1>
            <Link 
            onClick={handleCityVisibiluty}
            to='medicineHat'
            className=' text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital</Link>
        </div>
      </div> 	
     
    </div>

    <div className={`${selectionVisibility ? 'hidden' : 'container'}`} >
      <Outlet />
    </div>
    

    </div>
  )
}

export default CitySelection;