import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

const ArticleCard = ({ id, name, image }) => {


  return (
    <>
      <Link to={`/articles/${id}`} style={{ color: '#333333' }}>
        <Card style={{ width: '30vw' }} className="card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Text>
              {name}
            </Card.Text>
          </Card.Body>
        </Card> 
      </Link>
    </>

  )


}
export default ArticleCard





















