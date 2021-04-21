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
      <div className="sidebyside">
        
        <h4 id="video">
          
          <Card.Img variant="top"/> <iframe width='1199' height='584' src={video.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          
          <Card.Body>
            <div className="video-text">
              <Card.Title><h2>{video.name}</h2></Card.Title>
              <Card.Text>
                <h4>Author: {video.author}</h4>
                <h5>{video.duraration} | Level: {video.difficulty}</h5>
            
              </Card.Text>
              <div className="video-like">
                <Button variant="primary" >Like {video.like.length} </Button> 
                <Button variant="secondary" >Save to Profile</Button>
              </div>
              <br />
            </div>
            <div className="video-com">
              <Card style={{ width: '100%' }}>
                <h4>Comments: </h4><br /> 
                <h5>
                  {video.comments[1].text} - {video.comments[1].owner.username} <br /><br />
                  {video.comments[0].text} - {video.comments[0].owner.username} <br /><br />
                  {video.comments[3].text} - {video.comments[3].owner.username} <br /><br />
                  {video.comments[2].text} - {video.comments[2].owner.username}
                </h5>
              </Card>
            
            </div>
          </Card.Body>
        </h4>
      </div>
    </div>
  )
}

export default VideoShow