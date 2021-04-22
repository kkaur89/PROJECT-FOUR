import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const RecipeShow = () => {
  const params = useParams()
  const [recipe, setRecipe] = useState(null)
  const [user, getUser] = useState(null) 
  const [saved, setSaved] = useState('Save to Profile')

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/recipes/${params.id}`)
      setRecipe(response.data)
    }
    getData()
  }, [])
  console.log('RECIPE>>>>', recipe)

  const handleLikeClick = async (event) => {
    console.log(event)
    const token = window.localStorage.getItem('token')
    console.log('token>>>>>', token)
    await axios.put(`/api/recipes/${user.id}/likerecipe/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('Recipe Liked')
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

  const handleClick = async (event) => {
    console.log('click>>>>',event.target.value)
    setSaved('Saved to Profile')
    console.log(event)
    const token = window.localStorage.getItem('token')
    console.log('token>>>>>', token)
    await axios.put(`/api/auth/${recipe.id}/savedrecipe/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('Recipe Saved!!')
  }

  if (!recipe) return null

  return (
    <div className="RecipeShow">
      <div className="recipe-hero-body">
        <img className="recipe-logo-homepage" src='/assets/logo_white_large.png' />
      </div>
      <div className="R-show-format">  
        <Card style={{ width: '150vh' }} id = "recipeshow-card">
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
                <Button className="btn" onClick={handleLikeClick}>Like {recipe.like.length}</Button>
                <Button type="button" variant="secondary" className="save-button" value={recipe.id} onClick={handleClick}>{saved}</Button>
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