import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getPayLoadFromToken } from '../helpers/Auth'


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
  const {
    username,
    email,
  
    profileImage,
  } = user
  
  return (
    <>
      {user && (
        <div className="profile-container">
          <div className="columns">
            <div className="column">
              {' '}
              <div className="profile-box">
                <img
                  className="profile-image"
                  alt="user profile image"
                  src={profileImage}
                />
                {/* <Link to={`/profile/${userID}/edit-profile-image`}> */}
                <div
                  className="edit-profile-button"
                  name="edit-profile-image"
                >
                      Change Image
                </div>
                {/* </Link> */}
                <hr />
                <div>
                  <b>Email</b>
                </div>
                <p>{email}</p>
                <hr />
  
                {/* <Link to={`/profile/delete-account/${userID}`}> */}
                <button
                  className="delete-account-button button"
                  name="delete-profile"
                >
                      Delete My Account
                </button>
                {/* </Link> */}
              </div>
            </div>
  
            <div className="column">
              <div className="username">
                <h2>{`Hi, i'm ${username}`}</h2>
                {/* <p>{`Joined in ${convertTimestamp(createdAt)} `}</p> */}
              </div>
              {/* <Link to={`/profile/${userID}/edit`}>
                  <div className="edit-profile-button" name="edit-profile">
                    Edit My Profile
                  </div>
                </Link> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserProfile