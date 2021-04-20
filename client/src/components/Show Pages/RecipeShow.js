import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const RecipeShow = () => {
  const params = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/recipes/${params.id}`)
      setRecipe(response.data)
    }
    getData()
  }, [])
  console.log('RECIPE>>>>', recipe)

  if (!recipe) return null

  return (
    <div className="RecipeShow">
      <div className="R-show-format">  
        <Card style={{ width: '150vh' }}>
          <div className="R-show-format2"> 
            <div className="Ingredients">
              <p id ="p_wrap">Ingredients: </p>
              <br/>
              <p id ="p_wrap">{recipe.ingredients}</p>
            </div>
            <img src={recipe.image} width='1500vh'/>
          </div> 
          <Card.Body>
            <Card.Title>{recipe.name} | {recipe.time}    
              <br />
              <Button variant="primary" >Like {recipe.like.length} </Button> 
              <Button variant="secondary" >Save to Profile</Button>
            </Card.Title>
            <hr />
            <Card.Text>
              <p id ="p_wrap">{recipe.text}</p>
            </Card.Text>
          </Card.Body>
          
        </Card>
      </div>
    </div>
    
  )
}

export default RecipeShow