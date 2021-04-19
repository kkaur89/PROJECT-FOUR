import React from 'react'

// Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Home = () => {

  return (
    <div className="home-container">
      <div className="hero-body">
        <img className="logo-homepage" src='/assets/logo_white_large.png' />
      </div>
      <Jumbotron>
        <h1>Articles</h1>
        <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Jumbotron>
        <h1>Videos</h1>
        <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Jumbotron>
        <h1>Recipes</h1>
        <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
    
  )
}

export default Home