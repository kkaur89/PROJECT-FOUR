import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import logo from '../assets/logo_white_large copy.png'

import Form from 'react-bootstrap/Form'

const Register = () => {

  const history = useHistory()

  const [register, setRegister] = useState('Click to Register')

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_picture: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_picture: '',
  })

  const handleChange = (event) => {
    //? set state when user types
    console.log('value', event.target.value)
    console.log(formData['username'])
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  

  const handleSubmit = async event => {
    console.log('handleSubmit is working')
    setRegister('Successfully Registered')
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/register/', formData)
      console.log('added user',response)
    } catch (err) {
      console.log(err)
      setErrors(err)
    }
    history.push('/')
  }
  
  // console.log(errors)

  return (
    <>
      <div className="register-hero-body">
        <img className="logo-registerpage" src={logo} />
        <p className="register-name">Register to FitBox</p>
   
        <div className="register">
          <section className="register-section">
            <div className="container">
              <div className="columns">
                <form className="column is-half is-offset-one-quarter box"
                  onSubmit={handleSubmit}
                >
                  <div className="field">
                    <label className="label">Username<span className="required"> *</span></label>
                    <div className="control">
                      <input
                        className={`input ${errors.username ? 'is-danger' : ''}`}
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.username && <p className="help is-danger">{errors.username}</p>}
                  </div>
                  <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                      <input
                        className={`input ${errors.first_name ? 'is-danger' : ''}`}
                        placeholder="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.first_name && <p className="help is-danger">{errors.first_name}</p>}
                  </div>
                  <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                      <input
                        className={`input ${errors.last_name ? 'is-danger' : ''}`}
                        placeholder="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.last_name && <p className="help is-danger">{errors.last_name}</p>}
                  </div>
                  <div className="field">
                    <label className="label">Email<span className="required"> *</span></label>
                    <div className="control">
                      <input
                        className={`input ${errors.email ? 'is-danger' : ''}`}
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.email && <p className="help is-danger">{errors.email}</p>}
                  </div>
                  <div className="field">
                    <label className="label">Password<span className="required"> *</span></label>
                    <div className="control">
                      <input
                        className={`input ${errors.password ? 'is-danger' : ''}`}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.password && <p className="help is-danger">{errors.password}</p>}
                  </div>
                  <div className="field">
                    <label className="label">Password Confirmation<span className="required"> *</span></label>
                    <div className="control">
                      <input
                        className={`input ${errors.password_confirmation ? 'is-danger' : ''}`}
                        type="password"
                        placeholder="Password Confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.password_confirmation && <p className="help is-danger">{errors.password_confirmation}</p>}
                  </div>
                  <div className="field">
                    <label className="label">Profile Picture Upload</label>
                    <div className="control">
                      <Form>
                        <Form.Group>
                          <Form.File id="exampleFormControlFile1" />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  <div className="field">

                    <button type="submit" className="button register-button">{register}</button>

                  </div>
                </form>
              </div>
            </div>
          </section >
        </div >
      </div>
    </>
  )
}

export default Register