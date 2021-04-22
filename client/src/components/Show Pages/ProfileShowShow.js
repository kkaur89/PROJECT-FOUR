/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { getPayLoadFromToken } from './helpers/Auth'
import { useParams } from 'react-router-dom'


import Card from 'react-bootstrap/Card'



import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


const UserProfile = () => {

  const params = useParams()

  const [user, setUser] = useState(null)

  // const [articles, setArticles] = useState(null)

  // const [savedArticle, setSavedArticle] = useState(null)



  // const id = user.article.ParsInt([])  // as the id in the user.article is just an array of numbers this is converting them to an id 
  // console.log('id>>>', id)
  

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(`/api/articles/${params.id}`)
  //     setArticles(response.data)

  //   }
  //   getData()
  // }, [])


  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`/api/auth/${params.id}`)
      setUser(data)
     
     
    }
    getUser()
  }, [])

  // if (id === article.id) {
  //   setSavedArticle(article.data)    // here we are tring to get the id of the article vs id of the numbers in the user.article array to match 
  // }

  if (!user) return null
  // if (!articles) return null 
  // if (!savedArticle)

  // if (!user.article) return null
  // if (!user.videos) return null
  // if (!user.recipes) return null

  console.log('userID', user)
  const { username, email } = user

  
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
              <p>Friends</p>
              <Button variant="primary" >Delete Profile</Button>
            </div>
          </div>
        </>
      )}
      {user.article.length < 1 ? 
        <div className="article">
          <p className="article-header">Your Health Articles</p>
          <div className="article-container">
            <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
        
              {/* <Card.Img variant="top" src={user.article[0].image} /> */}
              <Card.Body>
                <Card.Text>
                  {/* {user.article[0].name} */}
                </Card.Text>
              </Card.Body>
            </Card> 
         
          </div>
        </div>
        :
        <div className="article">
          <p className="article-header">Your Health Articles</p>
          <div className="article-container">
            <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
    
              <Card.Img variant="top" src={user.article[0].image} />
              <Card.Body>
                <Card.Text>
                  {user.article[0].name}
                </Card.Text>
              </Card.Body>
            </Card> 
     
          </div>
        </div>
      }

    


      {user.videos.length < 1 ?
        <div className="video">
          <p className="video-header">Your Workout Videos</p>
          <div className="video-container" >
            <Card style={{ width: '50vh' }} className="mr-10" id = "minicard">

              {/* <iframe width='100%' height='284' src={user.videos.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe> */}

              <Card.Body>
                <Card.Text>
                  {/* {user.videos.name} */}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        :
        <div className="video">
          <p className="video-header">Your Workout Videos</p>
          <div className="video-container" >
            <Card style={{ width: '50vh' }} className="mr-10" id = "minicard">

              <iframe width='100%' height='284' src={user.videos.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

              <Card.Body>
                <Card.Text>
                  {user.videos.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      }
      {user.videos.length < 2 ?
        <div className="video">
          <p className="video-header">Your Workout Videos</p>
          <div className="video-container" >
            <Card style={{ width: '50vh' }} className="mr-10" id = "minicard">

              <iframe width='100%' height='284' src={user.videos.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

              <Card.Body>
                <Card.Text>
                  {user.videos.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        :
        <div className="video">
          <p className="video-header">Your Workout Videos</p>
          <div className="video-container" >
            <Card style={{ width: '50vh' }} className="mr-10" id = "minicard">

              <iframe width='100%' height='284' src={user.videos.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

              <Card.Body>
                <Card.Text>
                  {user.videos.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="video-container" >
            <Card style={{ width: '50vh' }} className="mr-10" id = "minicard">

              <iframe width='100%' height='284' src={user.videos.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

              <Card.Body>
                <Card.Text>
                  {user.videos.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      }


      {user.recipes.length < 1 ? 
        <>
          <div className="recipe">
            <p className="recipe-header">Your Healthy Recipes</p>
            <div className="recipe-container" >
              <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
                {/* <Card.Img variant="top" src={user.recipes[0].image} className="recipe-image"/> */}
                <Card.Body>
                  <Card.Text>
                    {/* {user.recipes[0].name} */}
                  </Card.Text>
                </Card.Body>
              </Card> 
            </div> 
          </div>
        </>
        :
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
      }

    </>
  )
}

export default UserProfile