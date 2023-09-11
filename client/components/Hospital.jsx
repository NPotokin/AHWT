import React from 'react'

const Hospital = (props) => {
  return (
    <div className='mx-3'>
      <div className='container flex flex-col'>
        <div>
          {props.name}
        </div>

        <div className=" flex flex-row">
          <div className="border-primary border-4">{props.img}</div>
          <div className="border-primary border-4 ">{props.info}</div>
        </div>

          {/* <div className="w-[300px] h-[300px] border-primary border-4">{props.hourGraph}</div>
          <div className="w-[300px] h-[300px] border-4 border-primary">{props.dayGraph}</div>
          <div className="w-[300px] h-[300px] border-4 border-primary">{props.weekGraph}</div>
          <div className="w-[600px] h-[300px] border-4 border-primary col-span-2">{props.stat}</div>
          <div className="w-[300px] h-[300px] border-4 border-primary col-span-2">{props.about}</div> */}
      </div>
      
    </div>
  )
}

export default Hospital