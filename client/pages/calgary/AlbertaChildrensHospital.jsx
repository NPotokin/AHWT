import React from 'react'
import Hospital from '../../components/Hospital'

const AlbertaChildrensHospital = () => {
  return (
    <div>
      Alberta Childrens Hospital
      <Hospital
        name='hospital name'
        about='about info'
        img='some image'
        info='main info with adrees and phone'
        stat='statistics about the waiting times'
        hourGraph='hourly graph'
        dayGraph='dayly graph'
        weekGraph='weekly graph'
      />

    </div>
  )
}

export default AlbertaChildrensHospital