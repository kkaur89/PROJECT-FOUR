import React from 'react'
import logo from '../assets/logo_white_large.png'
import image1 from '../assets/fitbox-health.jpeg'
import image2 from '../assets/f97c5316-7104-4232-a865-f10b97a9ea2b-GetFit_Desktop.png.jpeg'
import image3 from '../assets/getty-24a00a1feb1f490180df0789dbc35b64.jpg.webp'
import image4 from '../assets/photo-1522898467493-49726bf28798.webp'
import image5 from '../assets/0d4afd6fc61c47d2b7cfe3bbece0d730.jpg.webp'
import image6 from '../assets/46900896-321f-44da-a810-6b6d37c22c41.jpg.webp'
import image7 from '../assets/fitbox-recipe.jpeg'
import image8 from '../assets/f47cf2d8-4d47-4b7d-8da7-d55508115504.jpg'
import image9 from '../assets/9fa265036a114efda39200600227d8bb.webp'
import harryimage from '../assets/Screenshot 2021-04-19 at 16.50.11.png'
import karenimage from '../assets/Screenshot 2021-04-19 at 16.49.58.png'


// Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Popover from 'react-bootstrap/Popover'
import PopoverContent from 'react-bootstrap/PopoverContent'
import PopoverTitle from 'react-bootstrap/PopoverTitle'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Home = () => {

  PopoverContent
  PopoverTitle
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        Login to see more 
      </Popover.Content>
    </Popover>
  )

  return (
    <div className="home-container">
      <div className="hero-body">
        <img className="logo-homepage" src={logo} />
      </div>
      <div className="aims">
        <h2>The groundwork for all happiness is good health</h2>
        <br/>
        <p>It is important to look after yourself, physically and mentally, health is the greatest wealth.</p>
        <p>Our aim is to help people to discover new ways to help improve their day-to-day life.</p>
        <p>Find out how you can improve your life in the links below.</p>
      </div>
      
      <Jumbotron>
        <div className="jumbo-article">
          <Carousel>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image2} 
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="jumbo-text">
            <h1>Articles</h1>
            <p>Learn ways to improve your health and lifestyle with the many articles and blogs written by our fantastic authors.</p>
            <p>Exercise your mind</p>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <Button className="home-button">Learn more</Button>
            </OverlayTrigger>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron>
        <div className="jumbo-video">
          <Carousel>
            <Carousel.Item >
              <img
                className="d-block w-100"
                // id = "fix-size"
                src={image4}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image5}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image6}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="jumbo-text">
            <h1>Videos</h1>
            <p> In need of a rigorous HIIT session, or maybe a relaxing meditation, or just a good stretch?</p>
            <p> Discover the variety of videos we have, for all your needs.</p>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <Button className="home-button">Learn more</Button>
            </OverlayTrigger>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron>
        <div className="jumbo-recipe">
          <Carousel>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image7}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image8}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image9}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="jumbo-text">
            <h1>Recipes</h1>
            <p>Our healthy outside, starts from inside. Eat well, live well, be well.</p>
            <p>Build your culinary skills with the hundreds of healthy recipes.</p>
            <p>Ranging from high in protein or low in carbs, vegan or vegitarian, breakfast or dinner</p>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <Button className="home-button">Learn more</Button>
            </OverlayTrigger>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron>
        <div className="footer-container">
          <h4>Meet the Team</h4>
          <p>Founders of FitBox: Harry and Karen</p>
          <div className="owner-container">
            <Image src={harryimage} roundedCircle className="owner-image"/>
            <Image src={karenimage} roundedCircle className="owner-image"/>
          </div>
        </div>
      </Jumbotron>

    </div>
    
  )
}

export default Home