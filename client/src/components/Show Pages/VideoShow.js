import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const VideoShow = () => {
  const params = useParams()
  const [video, setVideo] = useState(null)
  const [user, getUser] = useState(null) 

  const [saved, setSaved] = useState('Save to Profile')

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/videos/${params.id}`)
      console.log('VIDEO PK>>>>', response.data)
      setVideo(response.data)
      
      
    }
    getData()
  }, [])
  const handleLikeClick = async (event) => {
    console.log(event)
    const token = window.localStorage.getItem('token')
    console.log('token>>>>>', token)
    await axios.put(`/api/videos/${user.id}/likevideo/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('Video Liked')
    window.location.reload()
  }

  const handleClick = async (event) => {
    console.log('click>>>>',event.target.value)
    setSaved('Saved to Profile')
    console.log(event)
    const token = window.localStorage.getItem('token')
    console.log('token>>>>>', token)
    await axios.put(`/api/auth/${video.id}/savedvideo/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('Article Saved!!')
    window.location.reload()
  }


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/${params.id}`)
      getUser(response.data)
      // console.log('User>>>', response.data)
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
                <Button className="btn" onClick={handleLikeClick}>Like {video.like.length}</Button>
                <Button type="button" variant="secondary" value={video.id} onClick={handleClick}>{saved}</Button>
              </div>
              <br />
            </div>
            <div className="video-com">
              <Card style={{ width: '100%' }}>
                <h4>Comments: </h4><br /> 
                <h5>
                  {video.comments[0].owner.username} - {video.comments[0].text} <br /><br />
                  {video.comments[1].owner.username} - {video.comments[1].text} <br /><br />
                  {video.comments[2].owner.username} - {video.comments[2].text} <br /><br />
                  {video.comments[3].owner.username} - {video.comments[3].text}
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