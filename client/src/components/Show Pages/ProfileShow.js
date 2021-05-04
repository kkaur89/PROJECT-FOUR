import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import ProfileCard from '../cards/ProfileCard'
import logo from '../../assets/logo_white_large copy.png'



const ProfileShow = () => {

  const location = useLocation()

  const [profileHome] = useState(location.state?.userProfile || '')

  const [user, getUser] = useState(null)

  const [users, setUsers]  = useState(null)

  // const params = useParams()


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/${profileHome}/`)
      getUser(response.data)
      console.log('User>>>', response.data)
    }
    getData()
  }, [])


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/auth/')
      setUsers(response.data)
      console.log('User>>>', response.data)
    }
    getData()
  }, [])


  // const filterName = user.filter(item => {
  //   return (item.first_name.includes(profileHome))
  // })
  // getUser(filterName)

  if (!user) return null
  if (!users) return null



  return (
    <>
      <div className="main-hero">
        <img className="logo-profilepage" src={logo} />
        <p className="profilesearch-name">Find your friends on FitBox</p>
      </div>
      <div className="profile">
        <h3 className="profile-header">FitBox Users</h3>
        <br />
        {users &&
        <>
        
          <div className="profile-container" >
            {users.map(item => (
              
              <ProfileCard 
                key={item._id} {...item}

              />
       
            ))}

          </div>
   
        </>
        }
      </div>
    </>

  )
}

export default ProfileShow