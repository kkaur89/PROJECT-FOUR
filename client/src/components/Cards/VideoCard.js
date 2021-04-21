import React from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import Card from 'react-bootstrap/Card'


const VideoCard = ({ id, name, video }) => {
  return (
    <div className="videoShow">
      <Link to={`/videos/${id}`} style={{ color: '#333333' }}>
        <Card style={{ width: '50vh' }} className="mr-10" id = "minicard">

          <iframe width='100%' height='284' src={video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
  
          <Card.Body>
            <Card.Text>
              {name}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default VideoCard