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
      <div className="aims">
        <h2>The groundwork for all happiness is good health</h2>
        <br/>
        <p>It is important to look after yourself, physically and mentally, health is the greatest wealth.</p>
        <p>Our aim is to help people to discover new ways to help imporve their day-to-day life.</p>
        <p>Find out how you can improve your life in the links below.</p>
      </div>
      <Jumbotron>
        <div className="jumbo-article">
          <img className="article-img" src='../images/fitbox-health.jpeg'/>
          <div className="jumbo-text">
            <h1>Articles</h1>
            <p>Learn ways to improve your health and lifestyle with the many articles and blogs written by our fantastic authors.</p>
            <p>Exercise your mind</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron>
        <div className="jumbo-video">
          <img className="video-img" src='../images/fitbox-workout.jpeg'/>
          <div className="jumbo-text">
            <h1>Videos</h1>
            <p> In need of a rigorous HIIT session, or maybe a relaxing meditation, or just a good stretch?</p>
            <p> Discover the variety of videos we have, for all your needs.</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron>
        <div className="jumbo-recipe">
          <img className="recipe-img" src='../images/fitbox-recipe'/>
          <div className="jumbo-text">
            <h1>Recipes</h1>
            <p>Our healthy outside, starts from inside. Eat well, live well, be well.</p>
            <p>Build your culinary skills with the hundreds of healthy recipes. Ranging from high in protein or low in carbs, vegan or vegitarian, breakfast or dinner</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
        </div>
      </Jumbotron>
    </div>
    
  )
}

export default Home