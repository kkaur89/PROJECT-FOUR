import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProfileShow = () => {

  const location = useLocation()

  const [profileHome] = useState(location.state?.userProfile || '')

  const [user, getUser] = useState(null)


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/${profileHome}`)
      getUser(response.data)
      console.log('User>>>', response.data)
    }
    getData()
  }, [])

  // const filterName = user.filter(item => {
  //   return (item.first_name.includes(profileHome))
  // })
  // getUser(filterName)

  if (!user) return null



  return (
    <>
      <div className="main-hero">
        <img className="logo-profilepage" src='/assets/logo_white_large copy.png' />
        <p className="profilesearch-name">Find your friends on FitBox</p>
      </div>
      <div className="profile">
        <p className="profile-header">FitBox Users</p>
        {user &&
          <div className="profile-container" >
            {user.map(item => (
              
              <Card style={{ width: '15vw' }} className="mr-10" key={item._id}>
                <Card.Body>
                  <Card.Text>
                    {item.first_name} {item.last_name}
                  </Card.Text> 
                  <Card.Img variant="top" src={item.profile_image} roundedCircle className="profileshow-image"/>
                  <Card.Text className="email-text">
                    {item.email}
                  </Card.Text> 
                </Card.Body>
                <Button variant="primary">Follow User</Button>
              </Card> 
          
            ))}
          </div>
        }
      </div>
    </>

  )
}

export default ProfileShow