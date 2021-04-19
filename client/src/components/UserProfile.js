import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getPayLoadFromToken, getTokenFromLocalStorage } from '../helpers/Auth'


const UserProfile = () => {


  const [user, getUser] = useState(null)

  const userID = getPayLoadFromToken().sub

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/${userID}`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      getUser(response.data)
      console.log('User>>>', response.data)
    }
    getData()
  }, [])

  if (!user) return null
  console.log('user',user)

  return (
    <>
      <div className="caption">
        <p>Welcome Back, {user.username}!</p>
      </div>
      <div className="menu-bar">
        <div className="text-container">
          <img className="mini-logo" src='/assets/logo_small_icon_only_inverted.png'/>
        </div>
      </div>
    </>
  )
}

export default UserProfile