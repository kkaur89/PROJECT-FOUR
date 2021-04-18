import React from 'react'
//import axios from 'axios'

// Boostrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Navbar1 = () => {
  return (
    <>
      <Navbar expand="lg" className="bring-to-front">
        <Navbar.Brand href="/"><img className="logo" src='/assets/logo_small 2.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/main">Home</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navbar1