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
    <>
      <div className="section">
        <div className="article">
          {article.map(item => (
            <div className="article-container" key={item._id}>
              <img src={item.image} />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
        <div className="video">
          {video.map(item => (
            <div className="video-container" key={item._id}>
              <iframe width='1199' height='584' src={item.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
              <h4>{item.video_name}</h4>
            </div>
          ))}
        </div>
        <div className="recipe">
          {recipe.map(item => (
            <div className="recipe-container" key={item._id}>
              <img src={item.image} />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Main