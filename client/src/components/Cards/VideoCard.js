import React from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const VideoCard = ({ id, video_name, video, author, duration, difficulty, like }) => {
  return (
    <div className="videoShow">
      <Link to={`/videos/${id}`}>
        <Card style={{ width: '100vh' }}>
          <Card.Img variant="top" src={video} alt={video_name} />
          <Card.Body>
            <Card.Title>{video_name}</Card.Title>
            <Card.Text>
              {author}
              {duration}
              {difficulty}
            </Card.Text>
            <Button variant="primary">{like}</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default VideoCard