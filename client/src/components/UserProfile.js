import React, { useState, useEffect } from 'react'
import axios from 'axios'


const UserProfile = () => {


  const [user, getUser] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const response = await axios.get('/api/auth/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      getUser(response.data)
      console.log('User>>>', response.data)
    }
    getData()
  }, [])

  if (!user) return null
  console.log(user)

  return (
    <>
      <div className="caption">
        <p className="welcome-caption">Welcome Back, {user.username}!</p>
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