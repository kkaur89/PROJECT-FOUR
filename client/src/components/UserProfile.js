import React, { useState, useEffect } from 'react'
import axios from 'axios'
<<<<<<< HEAD
import { getPayLoadFromToken } from '../components/helpers/Auth'
=======
import { getPayLoadFromToken } from './helpers/Auth'
>>>>>>> development
import ArticleCard from './Cards/ArticleCard'
import VideoCard from './Cards/VideoCard'
import RecipeCard from './Cards/RecipeCard'


import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


const UserProfile = () => {

  const [user, setUser] = useState(null)

  const userID = getPayLoadFromToken().sub
  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`/api/auth/${userID}`)
      setUser(data)
    }
    getUser()
  }, [])
  //prettier-ignore
  if (!user) return null
  console.log('userID', userID)
  const { username, email, bio } = user
  
  return (
    <>
      {user && (
        <>
          <div className="main-hero">
            <img className="logo-profilepage" src='/assets/logo_white_large copy.png' />
            <p className="profile-name">{`Welcome to FitBox ${username}`}</p>
          </div>
          <div className="menu-bar">
            <div className="text-container">
              <Image src={user.profile_image} roundedCircle className="profile-image"/>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <p>Bio: {bio} </p>
              <p>Friends</p>
              <Button variant="primary" >Delete Profile</Button>
            </div>

          </div>
          <div className="article">
            <p className="article-header">Your Health Articles</p>
            <div className="article-container">
              <ArticleCard />
            </div>
          </div>
          <div className="video">
            <p className="video-header">Your Workout Videos</p>
            <div className="video-container" >
              <VideoCard />   
            </div>
          </div>
          <div className="recipe">
            <p className="recipe-header">Your Healthy Recipes</p>
            <div className="recipe-container" >
              <RecipeCard />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default UserProfile