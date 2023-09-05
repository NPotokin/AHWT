import React from 'react'
import { useState } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'


const CalgaryEmergency = () => {

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
        className={`${emergencySelection? ' mt-12 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center' :  'hidden'}`}>
       <span className='text-secondary'>Emergency</span> Service Selection
      </h1>

      <div className={`${emergencySelection? 'grid grid-cols-1 lg:grid-cols-3 gap-12' : 'hidden'}`}>
        
        <div className=' relative mt-3 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://childrenshospitals.ca/wp-content/uploads/2019/03/achf2.jpg" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] ">
              <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Alberta Childrens Hospital</h1>
              <h1 className='pt-2 pb-9 text-justify text-lg font-medium'>This facility provides a range of healthcare services for children up to 18 years old including a 24/7 emergency department.</h1>
              <Link 
              onClick={handleEmergencySelection}
              to='albertaChildrensHospital'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className='relative mt-3 border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://i.cbc.ca/1.4868516.1679528199!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/foothills-medical-centre-hospital.JPG" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Foothills Medical Centre</h1>
              <h1 className='pt-2 pb-9 text-justify text-lg font-medium'>This facility provides a range of healthcare services including a 24/7 emergency department.</h1>
              <Link 
              onClick={handleEmergencySelection}
              to='foothillsMedicalCentre'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className='relative border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://i.cbc.ca/1.5840643.1607971692!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/peter-lougheed-centre-calgary-drone-shots.jpg" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Peter Lougheed Centre</h1>
              <h1 className='pt-2 pb-4 text-justify text-lg font-medium'>This facility provides a range of healthcare services including a 24/7 emergency department.</h1>
              <Link 
              onClick={handleEmergencySelection}
              to='peterLougheedCentre'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className=' relative border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://i.cbc.ca/1.5840633.1655256865!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/rockyview-general-hospital-calgary-drone-shots.jpg" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4  absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>Rockyview General Hospital</h1>
              <h1 className='pt-2 pb-9 text-justify text-lg font-medium'>This facility provides a range of healthcare services including a 24/7 emergency department.</h1>
              <Link 
              onClick={handleEmergencySelection}
              to='rockyviewGeneralHospital'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>
        
        <div className='col-span-3 lg:col-span-2 relative border-4 border-secondary rounded-3xl group hover:border-primary duration-1000'>
          <img src="https://kasian.com/wp-content/uploads/2022/08/AB-Health-Services-project.jpg" 
              alt="" 
              className="object-cover rounded-3xl bg-primary opacity-30" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] justify-between">
              <h1 className='pb-3 text-4xl font-semibold text-secondary group-hover:text-primary duration-1000'>South Health Campus</h1>
              <h1 className='pt-2 pb-9 text-justify text-lg font-medium'>This facility provides a range of healthcare services including a 24/7 emergency department.</h1>
              <Link 
              onClick={handleEmergencySelection}
              to='southHealthCampus'
              className='text-center p-3 rounded-xl text-xl font-semibold bg-secondary text-base-100 group-hover:bg-primary duration-1000'>Go to Hospital Page</Link>
          </div>
        </div>

      </div>



      <div className={`${emergencySelection ? 'hidden' : 'container'}`}>
        <Outlet />
      </div>

      </div>
    </div>
  )
}

export default CalgaryEmergency