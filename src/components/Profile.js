import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>Profile Component of {user.name} with email {user.email}</div>
  )
}

export default Profile