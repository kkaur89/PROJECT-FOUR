import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// Boostrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const Navbar1 = () => {
  
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()

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
    history.push('/profile')
  }


  return (
    <>
      <Navbar expand="lg" className="bring-to-front" >
        <Navbar.Brand href="/"><img className="logo" src='/assets/logo_small.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/main" className="nav-text">Home</Nav.Link>
            <Nav.Link href="/register"className="nav-text">Register</Nav.Link>
            <Nav.Link className="nav-text" onClick={handleShow}>Login</Nav.Link>
            <Nav.Link href="/profile"className="nav-text">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <form className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button variant="secondary" type="submit">
            Login
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Navbar1