import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import logo from '../../assets/logo_white_large.png'




import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'

const ArticleShow = () => {

  const params = useParams()

  const [article, setArticle] = useState(null)
  const [user, getUser] = useState(null) 

  const [saved, setSaved] = useState('Save to Profile')

  const handleLikeClick = async (event) => {
    console.log(event)
    const token = window.localStorage.getItem('token')
    console.log('token>>>>>', token)
    await axios.put(`/api/articles/${user.id}/likearticle/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('Article Liked')
    window.location.reload()
  }

  const handleClick = async (event) => {
    console.log('click>>>>',event.target.value)
    setSaved('Saved to Profile')
    console.log(event)
    const token = window.localStorage.getItem('token')
    console.log('token>>>>>', token)
    await axios.put(`/api/auth/${article.id}/savedplaces/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('Article Saved!!')
  }
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/articles/${params.id}/`)
      setArticle(response.data)
      // console.log('Article Data>>>', response.data)
    }
    getData()
  }, [])

  console.log('like worked!>>>', article)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/${params.id}/`)
      getUser(response.data)
      // console.log('User>>>', response.data)
    }
    getData()
  }, [])

 

  // const handleClick = event => {
  //   console.log(event)
  //   article.like.push(user.id)
  //   console.log('number of likes', article.like)
  // }

  if (!article) return null
  if (!user) return null

  // if (!article.comments.owner) return article.id



  return (
    <>
      <div className="article-section">
        <div className="article-hero-body">
          <img className="article-logo-homepage" src={logo} />
        </div>
        <Media>
          <Media.Body>
            <Container fluid> 
              <h4>{article.name}</h4>
              <h6>{article.author}</h6>    
              <img
                width={400}
                height={300}
                className="float-left mr-2 mb-1"
                src={article.image[0]}
                alt="Generic placeholder"
              />
              <p id="p_wrap">
                {article.text}
              </p>
            </Container>

          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Container fluid> 
              <img
                width={400}
                height={300}
                className="float-right mr-2 mb-1"
                src={article.image[1]}
                alt="Generic placeholder"
              />
              <p id="p_wrap" className="article-text">
                {article.text_two}
              </p>
            </Container>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Container fluid> 
              <img
                width={400}
                height={300}
                className="float-left mr-2 mb-1"
                src={article.image[2]}
                alt="Generic placeholder"
              />
              <p id="p_wrap" className="article-text">
                {article.text_three}
              </p>
            </Container>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Container fluid> 
              <img
                width={400}
                height={300}
                className="float-right mr-2 mb-1"
                src={article.image[3]}
                alt="Generic placeholder"
              />
              <p id="p_wrap" className="article-text">
                {article.text_four}
              </p>
            </Container>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Container fluid> 
              <img
                width={400}
                height={300}
                className="float-left mr-2 mb-1"
                src={article.image[4]}
                alt="Generic placeholder"
              />
              <p id="p_wrap" className="article-text">
                {article.text_five}
              </p>
            </Container>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Container fluid> 
              <img
                width={400}
                height={300}
                className="float-right mr-2 mb-1"
                src={article.image[5]}
                alt="Generic placeholder"
              />
              <p id="p_wrap">
                {article.text_six}
              </p>
            </Container>
          </Media.Body>
        </Media>

        <Media>
          <Media.Body>
            <Container fluid> 
              <p id="p_wrap">
          Comments: 
              </p>
              <hr />
              <p>
                {article.comments[0].owner.username} - {article.comments[0].text}
              </p>
              <>
                <Button className="like-button" onClick={handleLikeClick}>Like {article.like.length}</Button>
                <Button type="button" variant="secondary"className="save-button" value={article.id} onClick={handleClick}>{saved}</Button>
              </>
            </Container>
          </Media.Body>
        </Media>
      </div>
    </>
  )



} 

export default ArticleShow