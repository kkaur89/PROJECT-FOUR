import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
      console.log('DATA>>>', response.data)
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
    <>
      <div className="section">
        {article.map(item => (
          <div className="article-container" key={item._id}>
            <h4>{item.name}</h4>
            <img src={item.image} />
          </div>
        ))}
        {video.map(item => (
          <div className="video-container" key={item._id}>
            <h4>{item.video_name}</h4>
            <video width="750" height="500" controls> <source src={item.video} type="video/mp4"/> </video>
          </div>
        ))}
        {recipe.map(item => (
          <div className="recipe-container" key={item._id}>
            <h4>{item.name}</h4>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Main