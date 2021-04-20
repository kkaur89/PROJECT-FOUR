import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

const RecipeCard = ({ id, name, image }) => {


  return (
    <>
      <Link to={`/recipes/${id}`} style={{ color: '#333333' }}>
        <Card style={{ width: '25vw' }} className="card" id = "minicard">
          <Card.Img variant="top" src={image} className="recipe-image"/>
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
export default RecipeCard