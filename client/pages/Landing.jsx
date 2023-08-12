import React from 'react'

const Landing = () => {
    return (
        <div className='container flex flex-col mx-auto'>
          <div className='pt-32 flex flex-col m-2 p-2 mx-auto'>
            <h1 className='text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
              Welcome to <span className='text-secondary'>Alberta Hospitals</span> Waiting times tracker</h1>
            <button 
            className='mx-auto py-3 my-6 w-40  rounded-xl text-xl font-semibold bg-secondary text-base-100 hover:bg-primary duration-1000 '>
              See Tutorial</button>
          </div>
    
          <div className='pt-12 flex flex-col m-2 p-2 mx-auto'>
            <h1 className='text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
              Just few  <span className='text-primary'>Clicks</span> and you will see the latest data <span className='text-primary'>Visualized</span></h1>
            <button 
            className='mx-auto py-3 my-6 w-40  rounded-xl text-xl font-semibold bg-secondary text-base-100 hover:bg-primary duration-1000 '>
              Get Started</button>
          </div>
    
          <div className='pt-12 flex flex-col mx-auto'>
            <div className="flex flex-row">
              <div className='flex flex-col'>
                <h1>1.Chose the city</h1>
                <p>some text</p>
              </div>
              <div className='p-20 m-20'>image</div>
            </div>
    
          </div>
    
        </div>
      
  )
}

export default Landing