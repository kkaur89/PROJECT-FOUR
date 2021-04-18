import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components
import Home from './components/Home'
import Navbar1 from './components/Navbar'
import Main from './components/Main'
import VideoShow from './components/Show Pages/VideoShow'
import RecipeShow from './components/Show Pages/RecipeShow'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Switch>
        <Route exact path='/videos/:id'>
          <VideoShow />
        </Route>
        <Route exact path='/recipes/:id'>
          <RecipeShow />
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
