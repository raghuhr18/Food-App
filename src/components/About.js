import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Outlet />
      <h1>About Us Component</h1>
    </>
  )
}

export default About