import React from 'react'
import '../../styles/facultyLogin.css'

const StaffsLogin = () => {
  return (
    <div className='login-container'>
      <div class="container1">
        <div class="form-container sign-in-container">
          <form action="">
            <h1>Sign in</h1>
            <input type="loginID" placeholder="Enter your login ID" name='loginID'/>
            <input type="password" placeholder="Enter your Password" name='password'/>
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