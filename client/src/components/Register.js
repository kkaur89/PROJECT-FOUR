import React, { useState } from 'react'
import axios from 'axios'



const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    //? set state when user types
    // console.log('value', event.target.value)
    // console.log(formData['username'])
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  console.log(formData)

  const handleSubmit = async event => {
    console.log('handleSubmit is working')
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/register/', formData)
      console.log('added user',response.data)
    } catch (err) {
      console.log(err)
      setErrors(err)
    }
  }
  // console.log(errors)

  return (
    <>
      <div className="register-hero-body">
        <img className="register-logo-homepage" src='/assets/logo_white_large.png' />
   
        <div className="register">
          <section className="register-section">
            <div className="container">
              <div className="columns">
                <form className="column is-half is-offset-one-quarter box"
                  onSubmit={handleSubmit}
                >
                  <div className="field">
                    <label className="label">Username</label>
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
                    <label className="label">Email</label>
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
                    <label className="label">Password</label>
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
                    <label className="label">Password Confirmation</label>
                    <div className="control">
                      <input
                        className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                        type="password"
                        placeholder="Password Confirmation"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.passwordConfirmation && <p className="help is-danger">{errors.passwordConfirmation}</p>}
                  </div>
                  <div className="field">

                    <button type="submit" className="button register-button">Click to Register</button>

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