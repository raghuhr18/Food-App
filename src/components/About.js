import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'

const About = () => {
  return (
    <>
      <Outlet />
      <ProfileClass />
      <h1>About Us Component</h1>
    </>
  )
}

export default About