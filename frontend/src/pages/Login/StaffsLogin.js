import '../../styles/StaffsLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const StaffsLogin = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className='body'>
      <div className={`container1 ${isActive ? 'active' : ''}`}>
        <div className='form-box login'>
          <form action=''>
            <h1>Sign In</h1>
            <div className='input-box'>
              <input type='text' placeholder='Enter your User ID' required />
              <FontAwesomeIcon className='icon' icon={faUser} />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Enter your Password' required />
              <FontAwesomeIcon className='icon' icon={faLock} />
            </div>
            <div className='forgot-link'>
              <a>Forgot Password?</a>
            </div>
            <button type='submit' className='btn'>Sign In</button>
          </form>
        </div>

        <div className='form-box signup'>
          <form action=''>
            <h1>Sign Up</h1>
            <div className='input-box'>
              <input type='email' placeholder='Enter your Email' required />
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Enter your Password' required />
              <FontAwesomeIcon className='icon' icon={faLock} />
            </div>
            <button type='submit' className='btn'>Sign Up</button>
          </form>
        </div>

        <div className='toggle-box'>
          <div className='toggle-panel toggle-left'>
            <h1>Welcome Back!!</h1>
            <p>Enter your login credentials to sign-in to your account.</p>
            <p>Don't have an account?</p>
            <button className='btn register-btn' onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1>Welcome</h1>
            <p>Enter your Email and Password to create an account.</p>
            <p>Already have an account?</p>
            <button className='btn login-btn' onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffsLogin;
