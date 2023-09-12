import React from 'react'
import Hospital from '../../components/Hospital'
import Hospitals from '../../utils/Hospitals'

const AlbertaChildrensHospital = () => {

  const albChildHosp = Hospitals.filter((item) => item.hospitalName === 'Alberta Childrens Hospital')[0];
  

  return (
    <div>
      
      <Hospital
        hospitalName={albChildHosp.hospitalName}
        aboutInfo={albChildHosp.aboutInfo}
        street={albChildHosp.contactInfo.adress.street}
        city={albChildHosp.contactInfo.adress.city}
        zip={albChildHosp.contactInfo.adress.zip}
        phone={albChildHosp.contactInfo.phone}
        website={albChildHosp.contactInfo.website}
        stat='statistics about the waiting times'
        hourGraph='hourly graph'
        dayGraph='dayly graph'
        weekGraph='weekly graph'
      />

    </div>
  )
}

export default AlbertaChildrensHospital