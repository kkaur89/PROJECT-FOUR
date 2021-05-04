import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArticleCard from './cards/ArticleCard'
import VideoCard from './cards/VideoCard'
import RecipeCard from './cards/RecipeCard'
import minilogo from '../assets/logo_small_icon_only_inverted.png'
import logo from '../assets/logo_white_large.png'



import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Main = () => {
  const [article, setArticle] = useState(null)
  const [video, setVideo] = useState(null)
  const [recipe, setRecipe] = useState(null)

  const [value, setValue] = useState('')

  const handleSelect = event => {
    console.log(event)
    setValue(event)
  }

  console.log('value>>>>>', value)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/articles/')
      const health = response.data.filter(item => {
        return (item.category === 'Health')
      })
      const fitness = response.data.filter(item => {
        return (item.category === 'Fitness')
      })
      const food = response.data.filter(item => {
        return (item.category === 'Food')
      })
      if (value === 'Health') {
        setArticle(health) 
      } else if (value === 'Fitness') {
        setArticle(fitness)
      } else if (value === 'Food') {
        setArticle(food)
      } else {
        setArticle(response.data)
      }
      
      console.log('ARTICLES>>>', response.data)
    }
    getData()
  }, [value])


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/videos/')
      const hiitVideos = response.data.filter(item => {
        return (item.category === 'Hiit')
      })
      const yogaVideos = response.data.filter(item => {
        return (item.category === 'Yoga')
      })
      const absVideos = response.data.filter(item => {
        return (item.category === 'Abs')
      })
      const medVideos = response.data.filter(item => {
        return (item.category === 'Meditation')
      })
      if (value === 'Hitt') {
        setVideo(hiitVideos) 
      } else if (value === 'Yoga') {
        setVideo(yogaVideos)
      } else if (value === 'Abs') {
        setVideo(absVideos)
      } else if (value === 'Meditation') {
        setVideo(medVideos)
      } else {
        setVideo(response.data)
      }

      console.log('VIDEO>>>', response.data)
    }
    getData()
  }, [value])


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/recipes/')
      const lowCarbs = response.data.filter(item => {
        return (item.category === 'Low Carbs')
      })
      const highProtein = response.data.filter(item => {
        return (item.category === 'High Protein')
      })
      const vegRecipe = response.data.filter(item => {
        return (item.category === 'Vegetarian')
      })
      const vegan = response.data.filter(item => {
        return (item.category === 'Vegan')
      })
      if (value === 'Low Carbs') {
        setRecipe(lowCarbs) 
      } else if (value === 'High Protein') {
        setRecipe(highProtein)
      } else if (value === 'Vegetarian') {
        setRecipe(vegRecipe)
      } else if (value === 'Vegan') {
        setRecipe(vegan)
      } else {
        setRecipe(response.data)
        console.log('RECIPES>>>', response.data)
      }
    }
    getData()
  }, [value])



  if (!article) return null
  if (!video) return null
  if (!recipe) return null


  return (

    <div className="section">
      <div className="main-hero">
        <img className="logo-mainpage" src={logo} />
      </div>
      <div className="menu-bar">
        <div className="text-container">
          <img className="mini-logo" src={minilogo}/>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect} >
            <NavDropdown title="Articles" id="nav-dropdown" >
              <NavDropdown.Item eventKey="Health">Health</NavDropdown.Item>
              <NavDropdown.Item eventKey="Fitness">Fitness</NavDropdown.Item>
              <NavDropdown.Item eventKey="Food">Food</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Workout Videos" id="nav-dropdown" >
              <NavDropdown.Item eventKey="Yoga">Yoga</NavDropdown.Item>
              <NavDropdown.Item eventKey="Hiit">Hiit</NavDropdown.Item>
              <NavDropdown.Item eventKey="Cardio">Cardio</NavDropdown.Item>
              <NavDropdown.Item eventKey="Abs">Abs</NavDropdown.Item>
              <NavDropdown.Item eventKey="Weights">Weights</NavDropdown.Item>
              <NavDropdown.Item eventKey="Meditiation">Meditation</NavDropdown.Item>
              <NavDropdown.Item eventKey="Stretches">Stretches</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Healthy Recipes" id="nav-dropdown" bg="light">
              <NavDropdown.Item eventKey="High Protein">High Protein</NavDropdown.Item>
              <NavDropdown.Item eventKey="Low Carb">Low Carbs</NavDropdown.Item>
              <NavDropdown.Item eventKey="Vegan">Vegan</NavDropdown.Item>
              <NavDropdown.Item eventKey="Vegetarian">Vegetarian</NavDropdown.Item>
              <NavDropdown.Item eventKey="Breakfast">Breakfast</NavDropdown.Item>
              <NavDropdown.Item eventKey="Snacks">Snacks</NavDropdown.Item>
              <NavDropdown.Item eventKey="Dessert">Dessert</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Recently Visited" id="nav-dropdown" bg="light">
              <NavDropdown.Item eventKey="Articles">Articles</NavDropdown.Item>
              <NavDropdown.Item eventKey="Videos">Videos</NavDropdown.Item>
              <NavDropdown.Item eventKey="Recipes">Recipes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Saved" id="nav-dropdown" bg="light">
              <NavDropdown.Item eventKey="Articles">Articles</NavDropdown.Item>
              <NavDropdown.Item eventKey="Videos">Videos</NavDropdown.Item>
              <NavDropdown.Item eventKey="Recipes">Recipes</NavDropdown.Item>
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