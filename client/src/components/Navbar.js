import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { userIsAuthenticated } from './helpers/Auth'

// Boostrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'



const Navbar1 = () => {

  const history = useHistory()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [userProfile, setUserProfile] = useState(null)

  const handleUserChange = event => {
    setUserProfile(event.target.value)
    console.log('UserProfile', userProfile)
  }
  console.log('UserProfile', userProfile)

  const handleUserSubmit = event => {
    show(false)
    console.log(event)
    history.push({  pathname: '/profiles', state: { userProfile } })
    
  }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })


  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  console.log(formData)

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await axios.post('api/auth/login/', formData)
    window.localStorage.setItem('token', response.data.token)
    console.log('TOKEN>>',response.data.token)
    history.push('/profile/:id')
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }
  const location = useLocation()

  useEffect(() => {

  },[location.pathname])

  return (
    <>
      <Navbar expand="lg" className="bring-to-front" >
        <Navbar.Brand href="/"><img className="logo" src='/assets/logo_small.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/main" className="nav-text">Home</Nav.Link>
            {userIsAuthenticated() && 
            <>
              <Nav.Link href="/profile/:id"className="nav-text">Profile</Nav.Link>
              <Nav.Link className="nav-text" onClick={handleLogOut}>Log Out</Nav.Link>
            </>
            }
            {!userIsAuthenticated() && 
            <>
              <Nav.Link href="/register"className="nav-text">Register</Nav.Link>
              <Nav.Link className="nav-text" onClick={handleShow}>Login</Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search User" className="mr-sm-2" onChange={handleUserChange}/>
          <Button variant="outline-primary" onClick={handleUserSubmit}>Search</Button>
        </Form>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img className="logo" src='/assets/logo_small.png'/>
        </Modal.Header>
        <Modal.Body>
          <form className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}>
            <div className="field">
              <label className="label-login">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label-login">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
            <button variant="secondary" type="submit" className="login-button">
            Login
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Navbar1