import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const VideoShow = () => {
  const params = useParams()
  const [video, setVideo] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/videos/${params.id}`)
      console.log('VIDEO PK>>>>', response.data)
      setVideo(response.data)
      
      
    }
    getData()
  }, [])

  if (!video) return null
  return (
    <div className="videoShow">
      <Card style={{ width: '100vh' }}>
        <Card.Img variant="top"/> <iframe width='1199' height='900' src={video.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
        <Card.Body>
          <Card.Title>{video.video_name}</Card.Title>
          <Card.Text>
            <h2>Author: {video.author}</h2>
            <h4>{video.duraration}</h4>
            <h4>Level: {video.difficulty}</h4>
          </Card.Text>
          <Button variant="primary">Like{video.like}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default VideoShow