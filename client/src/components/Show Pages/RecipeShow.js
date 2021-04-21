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
              <br />
              <h3 id ="p_wrap">Ingredients: </h3>
              <br/>
              <p id ="p_wrap">{recipe.ingredients}</p>
            </div>
            <div className="recipe-img">
              <img src={recipe.image} width='500vh'/>
            </div>
          </div> 
          <Card.Body>
            <hr />
            <br />
            <div className="recipe-center">
              <Card.Title><h3>{recipe.name}</h3> {recipe.time}    
                <br />
                <br />
                <Button variant="primary" >Like {recipe.like.length}</Button> 
                <Button variant="secondary" >Save to Profile</Button>
              </Card.Title>
              
              <Card.Text>
                <div className="recipe-text">
                  <br/>
                  <p id ="p_wrap">{recipe.text}</p>
                </div>
              
              </Card.Text>
            </div>
          </Card.Body>
          
        </Card>
      </div>
    </div>
    
  )
}

export default RecipeShow