import React from 'react'
import { useState } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'


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
        
        <div className=' relative mt-3 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://content.betterimpact.com/files/agency/14020/airdrie-urgent-care.png" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] ">
              <h1 className='pb-9 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Airdrie Community Health Centre</h1>
              <Link 
              onClick={handleUrgentCareSelection}
              to='airdrieCommunityHealthCentre'
              className='text-center  p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className='relative mt-3 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://commissioning.ca/wp-content/uploads/2020/12/ctc_front.jpg" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-2 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Sheldon M. Chumir Health Centre</h1>
              <h1 className='pb-4 text-justify text-lg font-medium'>This facility provides 24/7 care for people with injuries or illnesses that are not life threatening. Other healthcare services have limited hours.</h1>
              <Link 
              onClick={handleUrgentCareSelection}
              to='sheldonMChumirCentre'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className='relative border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://i.cbc.ca/1.6539458.1659491252!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/south-calgary-health-centre.jpg" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-6 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>South Calgary Health Centre</h1>
              <Link 
              onClick={handleUrgentCareSelection}
              to='southCalgaryHealthCentre'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className=' relative border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://dht7q8fif4gks.cloudfront.net/2019-11/toby%20award.png" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-9 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Cochrane Community Health Centre</h1>
              <Link 
              onClick={handleUrgentCareSelection}
              to='cochraneCommunityHealthCentre'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className='col-span-3 lg:col-span-2 relative border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://www.okotoks.ca/sites/default/files/styles/banner_inside/public/pictures/banner-images/family-resource-centre_0.jpg?itok=bhGo86hg" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-9 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Okotoks Health and Wellness Centre</h1>
              <Link 
              onClick={handleUrgentCareSelection}
              to='okotoksHealthAndWellnessCentre'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>

      </div>



      <div className={`${urgentCareSelection ? 'hidden' : 'container'}`}>
        <Outlet />
      </div>

      </div>
    </div>
  )
}

export default CalgaryUrgentCare