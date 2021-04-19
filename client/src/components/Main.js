import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArticleCard from './Cards/ArticleCard'
import VideoCard from './Cards/VideoCard'
import RecipeCard from './Cards/RecipeCard'


import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Main = () => {
  const [article, setArticle] = useState(null)
  const [video, setVideo] = useState(null)
  const [recipe, setRecipe] = useState(null)


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/articles')
      setArticle(response.data)
      console.log('DATA>>>', response.data)
    }
    getData()
  }, [])


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/videos')
      setVideo(response.data)
      console.log('VIDEO>>>', response.data)
    }
    getData()
  }, [])


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/recipes')
      setRecipe(response.data)
      console.log('DATA>>>', response.data)
    }
    getData()
  }, [])

  const handleSelect = event => {
    console.log(event)
  }

  if (!article) return null
  if (!video) return null
  if (!recipe) return null

  return (

    <div className="section">
      <div className="main-hero">
        <img className="logo-mainpage" src='/assets/logo_white_large.png' />
      </div>
      <div className="menu-bar">
        <div className="text-container">
          <img className="mini-logo" src='/assets/logo_small_icon_only_inverted.png'/>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect} >
            <NavDropdown title="Articles" id="nav-dropdown" >
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Workout Videos" id="nav-dropdown" >
              <NavDropdown.Item eventKey="4.1">Yoga</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Hiit</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Cardio</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Abs</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">Weights</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6">Meditation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7">Stretches</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Healthy Recipes" id="nav-dropdown" bg="light">
              <NavDropdown.Item eventKey="4.1">High Protein</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Low Carbs</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Vegan</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Vegetarian</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">Breakfast</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6">Snacks</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7">Dessert</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Recently Visited" id="nav-dropdown" bg="light">
              <NavDropdown.Item eventKey="4.1">Articles</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Videos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Recipes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Saved" id="nav-dropdown" bg="light">
              <NavDropdown.Item eventKey="4.1">Articles</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Videos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Recipes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </div>       
      <div className="article">
        <p className="article-header">Health Articles</p>
        {article &&
            <div className="article-container">
              {article.map(item => (
                <ArticleCard
                  key={item._id} {...item} />
              ))}
            </div>
        }
      </div>
      <div className="video">
        <p className="video-header">Workout Videos</p>
        {video && 
            <div className="video-container" >
              {video.map(item => (
                <VideoCard
                  key={item._id} {...item} />   
              ))}
            </div>
        }
      </div>
      <div className="recipe">
        <p className="recipe-header">Healthy Recipes</p>
        {recipe &&
          <div className="recipe-container" >
            {recipe.map(item => (
              <RecipeCard 
                key={item._id} {...item}
              />
            ))}
          </div>
        }
      </div>
    </div>
 

  )
}

export default Main