import React from 'react'
import {createBrowserRouter, RouterProvider }  from 'react-router-dom'

import{
  CitySelection, 
  Landing, 
  CalgaryServiceSelection,
  CalgaryEmergency, 
  CalgaryUrgentCare,
  AlbertaChildrensHospital,
  FoothillsMedicalCentre,
  PeterLougheedCentre,
  RockyviewGeneralHospital,
  SouthHealthCampus,
  AirdrieCommunityHealthCentre,
  SheldonMChumirCentre,
  SouthCalgaryHealthCentre,
  CochraneCommunityHealthCentre,
  OkotoksHealthAndWellnessCentre,
  EdmontonHospitalSelection,
  DevonGeneralHospital,
  FortSaskCommunityHospital,
  GreyNunsCommunityHospital,
  LeducCommunityHospital,
  MisericordiaCommunityHospital,
  NortheastCommunityHealthCentre,
  RoyalAlexandraHospital,
  StolleryChildrensHospital,
  StrathconaCommunityHospital,
  SturgeonCommunityHospital,
  UniversityOfAlbertaHospital,
  WestViewHealthCentre,
  RedDeerHospitalSelection,
  RedDeerRegionalHospital,
  InnisfailHealthCentre,
  LacombeHospitalAndCareCentre,
  GrandePrairieRegionalHospital,
  ChinookRegionalHospital,
  MedicineHatRegionalHospital,
  
} from '../pages'
import HomeLayout from '../pages/HomeLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path:'citySelection',
        element: <CitySelection />,
        children: [
          {
            path: 'calgary',
            element: <CalgaryServiceSelection />,
            children: [
              {
                path: 'emergency',
                element: <CalgaryEmergency />,
                children: [
                  {
                    path: 'albertaChildrensHospital',
                    element: <AlbertaChildrensHospital />
                  },
                  {
                    path: 'foothillsMedicalCentre',
                    element: <FoothillsMedicalCentre />
                  },
                  {
                    path: 'peterLougheedCentre',
                    element: <PeterLougheedCentre />
                  },
                  {
                    path: 'rockyviewGeneralHospital',
                    element: <RockyviewGeneralHospital />
                  },
                  {
                    path: 'southHealthCampus',
                    element: <SouthHealthCampus />
                  },
                ],
              },
              {
                path: 'urgentCare',
                element: <CalgaryUrgentCare />,
                children: [
                  {
                    path: 'airdrieCommunityHealthCentre',
                    element: <AirdrieCommunityHealthCentre />
                  },
                  {
                    path: 'sheldonMChumirCentre',
                    element: <SheldonMChumirCentre />
                  },
                  {
                    path: 'southCalgaryHealthCentre',
                    element: <SouthCalgaryHealthCentre />
                  },
                  {
                    path: 'cochraneCommunityHealthCentre',
                    element: <CochraneCommunityHealthCentre />
                  },
                  {
                    path: 'okotoksHealthAndWellnessCentre',
                    element: <OkotoksHealthAndWellnessCentre />
                  },
                ],
              },
            ],
          },
          {
            path: 'edmonton',
            element: <EdmontonHospitalSelection />,
            children: [
              {
                path: 'devonGeneralHospital',
                element: <DevonGeneralHospital />
              },
              {
                path: 'fortSaskCommunityHospital',
                element: <FortSaskCommunityHospital />
              },
              {
                path: 'greyNunsCommunityHospital',
                element: <GreyNunsCommunityHospital />
              },
              {
                path: 'leducCommunityHospital',
                element: <LeducCommunityHospital />
              },
              {
                path: 'misericordiaCommunityHospital',
                element: <MisericordiaCommunityHospital />
              },
              {
                path: 'northeastCommunityHealthCentre',
                element: <NortheastCommunityHealthCentre />
              },
              {
                path: 'royalAlexandraHospital',
                element: <RoyalAlexandraHospital />
              },
              {
                path: 'stolleryChildrensHospital',
                element: <StolleryChildrensHospital />
              },
              {
                path: 'srathconaCommunityHospital',
                element: <StrathconaCommunityHospital />
              },
              {
                path: 'sturgeonCommunityHospital',
                element: <SturgeonCommunityHospital />
              },
              {
                path: 'universityOfAlbertaHospital',
                element: <UniversityOfAlbertaHospital />
              },
              {
                path: 'westViewHealthCentre',
                element: <WestViewHealthCentre />
              },
            ],
          },
          {
            path: 'redDeer',
            element: <RedDeerHospitalSelection />,
            children: [
              {
                path: 'redDeerRegionalHospital',
                element: <RedDeerRegionalHospital />,
              },
              {
                path: 'innisfailHealthCentre',
                element: <InnisfailHealthCentre />,
              },
              {
                path: 'lacombeHospitalAndCareCentre',
                element: <LacombeHospitalAndCareCentre />,
              },
            ]
          },
          {
            path: 'grandePrairie',
            element: <GrandePrairieRegionalHospital  />
          },
          {
            path: 'lethbridge',
            element: <ChinookRegionalHospital  />
          },
          {
            path: 'medicineHat	',
            element: <MedicineHatRegionalHospital  />
          },

        ]
      },
      
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App