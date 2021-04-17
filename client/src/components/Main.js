import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArticleCard from './Cards/ArticleCard'
import VideoCard from './Cards/VideoCard'
import RecipeCard from './Cards/RecipeCard'

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

  if (!article) return null
  if (!video) return null
  if (!recipe) return null

  return (

    <div className="section">
      <div className="main-hero">
        <img className="logo-mainpage" src='/assets/logo_white_large.png' />
      </div>
      <div className="menu-bar">
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