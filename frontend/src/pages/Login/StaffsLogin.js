import React, { useState } from 'react'
import '../../styles/facultyLogin.css'
import Validation from './staffLoginValidation'

const StaffsLogin = () => {
  const [values, setValues] = useState({
    loginID: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
 
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(error.email === "" && errors.password === "") {
      axios.post('http://localhost:3306')
    }

  }

  return (
    <div className='login-container'>
      <div class="container1">
        <div class="form-container sign-in-container">
          <form action="" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <input type="loginID" placeholder="Enter your login ID" onChange={handleInput} name='loginID'/>
            {errors.loginID && <span className='error-text'> {errors.loginID} </span>}
            <input type="password" placeholder="Enter your Password" onChange={handleInput} name='password'/>
            {errors.password && <span className='error-text'> {errors.password} </span>}
            <a href="#">Forgot your password?</a>
            <button type='submit' >Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Hello!!</h1>
              <p>Enter your login credentials to login to your account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffsLogin