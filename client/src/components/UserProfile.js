import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getPayLoadFromToken } from './helpers/Auth'


import Card from 'react-bootstrap/Card'



import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


const UserProfile = () => {

  const [user, setUser] = useState(null)

  // const [userData, setUserData] = useState(null)

  const userID = getPayLoadFromToken().sub
  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`/api/auth/${userID}`)
      setUser(data)
    }
    getUser()
  }, [])

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(`api/auth/${userID}/savedplaces/`)
  //     setUserData(response.data)
  //   }
  //   getData()
  // }, [])
  // console.log('userData>>>',userData)


  //prettier-ignore
  if (!user) return null
  // if (!userData)
  console.log('userID', user)
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
              <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
                <Card.Img variant="top" src={user.articles[0].image} />
                <Card.Body>
                  <Card.Text>
                    {user.articles[0].name}
                  </Card.Text>
                </Card.Body>
              </Card> 
            </div>
            {/* <div className="article-container">
              <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
                <Card.Img variant="top" src={user.articles[1].image} />
                <Card.Body>
                  <Card.Text>
                    {user.articles[1].name}
                  </Card.Text>
                </Card.Body>
              </Card> 
            </div>
            <div className="article-container">
              <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
                <Card.Img variant="top" src={user.articles[1].image} />
                <Card.Body>
                  <Card.Text>
                    {user.articles[1].name}
                  </Card.Text>
                </Card.Body>
              </Card> 
            </div> */}
          
          </div>
          <div className="video">
            <p className="video-header">Your Workout Videos</p>
            <div className="video-container" >
              <Card style={{ width: '50vh' }} className="mr-10" id = "minicard">

                <iframe width='100%' height='284' src={user.videos[0].video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

                <Card.Body>
                  <Card.Text>
                    {user.videos[0].name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="recipe">
            <p className="recipe-header">Your Healthy Recipes</p>
            <div className="recipe-container" >
              <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
                <Card.Img variant="top" src={user.recipes[0].image} className="recipe-image"/>
                <Card.Body>
                  <Card.Text>
                    {user.recipes[0].name}
                  </Card.Text>
                </Card.Body>
              </Card> 
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default UserProfile