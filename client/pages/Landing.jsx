import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='container flex flex-col mx-auto'>
          <div className='pt-32 flex flex-col m-2 p-2 mx-auto'>
            <h1 className='text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
              Welcome to <span className='text-secondary'>Alberta Hospitals</span> Waiting times tracker</h1>
            <a href='#tutorial' 
            className='mx-auto text-center py-3 my-6 w-40  rounded-xl text-xl font-semibold bg-secondary text-base-100 hover:bg-primary duration-1000 '>
              See Tutorial</a>
          </div>
    
          <div className='pt-12 flex flex-col m-2 p-2 mx-auto'>
            <h1 className='text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
              Just few  <span className='text-primary'>Clicks</span> and you will see the latest data <span className='text-primary'>Visualized</span></h1>
            <Link 
            to='citySelection'
            className='mx-auto text-center  py-3 my-6 w-40 rounded-xl text-xl font-semibold bg-secondary text-base-100 hover:bg-primary duration-1000 '>
              Get Started</Link>
          </div>
    
            
          <div className='pt-12 flex flex-col mx-auto'>
            <h1>  </h1>
            <h1
            id='tutorial' 
            className='text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
              <span className='text-secondary'>Check out </span> 
              our 3-step  <span className='text-secondary'>tutorial</span></h1>


            <div className="flex flex-col md:flex-row mx-3">
              <div className='flex flex-col my-3 mx-3'>
                <h1 className='my-3 text-xl lg:text-4xl xl:text-5xl font-extrabold '>
                  <span className='text-primary'>STEP 1.</span> Chose the City</h1>
                  <p className='text-md leading-normal lg:text-2xl xl:text-3xl font-semibold text-justify'>
                    We collect information about six major cities of Alberta: Calgary, Edmomton, Red Deer, Grande Praierie, Lethbridge and Medicine Hat. For information about hospitals in Calgary and Edmomton areas please refer to the city pages. 
                  </p>
              </div>
              <img 
                src='../assets/citySelection.jpg'
                className='w-[300px] h-[300px] mx-auto border-4 rounded-3xl border-primary' />
            </div>

            <div className="flex flex-col md:flex-row-reverse mx-3">
              <div className='flex flex-col my-3 mx-3'>
                <h1 className='my-3 text-xl lg:text-4xl xl:text-5xl font-extrabold '>
                  <span className='text-secondary'>STEP 2.</span> Chose the Service</h1>
                  <p className='text-md leading-normal lg:text-2xl xl:text-3xl font-semibold text-justify'>
                    Most Cities will give you the selection of Medical Facilities right away. For Calgary, however, there is some distinction. Based on your needs and condition you could either go fot Emergency in case there is a real dander to your life, or Urgent Care for less severe conditions. 
                  </p>
              </div>
              <img 
                src='../assets/serviceSelection.jpg'
                className='w-[300px] h-[300px] border-4 mx-auto rounded-3xl border-secondary' />
            </div>

            <div className="flex flex-col md:flex-row mx-3">
              <div className='flex flex-col my-3 mx-3'>
                <h1 className='my-3 text-xl lg:text-4xl xl:text-5xl font-extrabold '>
                  <span className='text-primary'>STEP 3.</span> Chose the Health Care Facility</h1>
                  <p className='mx-2 text-md leading-normal lg:text-2xl xl:text-3xl font-semibold text-justify'>
                    Once you decided on your location and type of care you need, select from the list of available facilities to see the statistical data on waiting times. 
                  </p>
              </div>
              <img 
                src='../assets/hospitalSelection.jpg'
                className='w-[300px] h-[300px] mx-auto border-4 rounded-3xl border-primary' />
            </div>
    
          </div>
    
        </div>
      
  )
}

export default Landing