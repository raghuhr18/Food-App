import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
// import ProfileClass from './ProfileClass'



const ProfileClass = lazy(() => import('./ProfileClass'));
const About = () => {
  return (
    <>
      <Outlet />
      <Suspense fallback={<h3>Loading....!</h3>}>
          <ProfileClass />
      </Suspense>
      <h1>About Us Component</h1>
    </>
  )
}

export default About