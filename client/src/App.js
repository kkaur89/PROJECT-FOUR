import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components
import Home from './components/Home'
import Navbar1 from './components/Navbar'
import Main from './components/Main'
import VideoShow from './components/show pages/VideoShow'
import ArticleShow from './components/show pages/ArticleShow'
import RecipeShow from './components/show pages/RecipeShow'
import Register from './components/Register'
import UserProfile from './components/UserProfile'
import ProfileShow from './components/show pages/ProfileShow'
import ProfileShowShow from './components/show pages/ProfileShowShow'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Switch>
        <Route exact path='/videos/:id'>
          <VideoShow />
        </Route>
        <Route exact path='/articles/:id'>
          <ArticleShow />
        </Route>
        <Route exact path='/recipes/:id'>
          <RecipeShow />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile/:id">
          <UserProfile />
        </Route>
        <Route exact path="/profiles/:id">
          <ProfileShowShow />
        </Route>
        <Route exact path="/profiles">
          <ProfileShow />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/main'>
          <Main />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}



export default App
