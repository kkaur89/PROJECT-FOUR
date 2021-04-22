/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProfileCard = ({ id, first_name, last_name, profile_image, email }) => {

  const [saved, setSaved] = useState('Follow User')

  const handleClick = async (event) => {
    console.log('click>>>>',event.target.value)
    setSaved('Following User')
    console.log(event)
    const token = window.localStorage.getItem('token')
    console.log('token>>>>>', token)
    await axios.put(`/api/auth/${id}/friends/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('Friend Saved!')
  }

  return (
    <>
     
      <Card style={{ width: '15vw' }} className="mr-10" >
        <Card.Body>
          <Link to={`profiles/${id}`} style={{ color: '#333333' }}>
            <Card.Text>
              {first_name} {last_name}
            </Card.Text> 
            <Card.Img variant="top" src={profile_image} roundedCircle className="profileshow-image"/>
            <Card.Text className="email-text">
              {email}
            </Card.Text> 
          </Link>
        </Card.Body>
        <Button variant="primary" value={id} onClick={handleClick}>{saved}</Button>
      </Card> 
     
    </>
  )

}

export default ProfileCard