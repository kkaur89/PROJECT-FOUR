import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

const ArticleCard = ({ id, name, image }) => {


  return (
    <>
      <Link to={`/articles/${id}`} style={{ color: '#333333' }}>
        <Card style={{ width: '25vw' }} className="mr-10" id = "minicard">
          <Card.Img variant="top" src={image[0]} />
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





















