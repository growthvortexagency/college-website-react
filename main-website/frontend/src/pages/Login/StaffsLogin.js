/* StaffLogin.js */
import '../../styles/StaffsLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StaffsLogin = () => {
  const [isActive, setIsActive] = useState(false); 
  const [formData, setFormData] = useState({ email: '', password: '' }); 
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleRegisterClick = () => {
    setIsActive(true);
    setSuccessMessage('');
    setErrors({});
  };
  const handleLoginClick = () => {
    setIsActive(false);
    setSuccessMessage('');
    setErrors({});
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = isActive ? 'http://localhost:5000/register' : 'http://localhost:5000/login';

    try {
      const response = await axios.post(url, formData);

      setSuccessMessage(response.data.message);
      setErrors({});
      if (!isActive) {
        setTimeout(() => navigate('/pages/Dashboards/staffsdashboards'), 1500);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred.';
      if (errorMessage.includes('email')) {
        setErrors({ ...errors, email: errorMessage });
      } else if (errorMessage.includes('password')) {
        setErrors({ ...errors, password: errorMessage });
      } else {
        setErrors({ email: errorMessage, password: errorMessage });
      }
    }
  };

  return (
    <div className="body">
      <div className={`container1 ${isActive ? 'active' : ''}`}>
        <div className="form-box login">
          <form onSubmit={handleFormSubmit}>
            <h1>Sign In</h1>
            <div className="input-box">
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
              <FontAwesomeIcon className="icon" icon={faLock} />
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Sign In</button>
            {successMessage && !isActive && <p className="success-message">{successMessage}</p>}
          </form>
        </div>

        <div className="form-box signup">
          <form onSubmit={handleFormSubmit}>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
              <FontAwesomeIcon className="icon" icon={faLock} />
            </div>
            <button type="submit" className="btn">Sign Up</button>
            {successMessage && isActive && <p className="success-message">{successMessage}</p>}
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!!</h1>
            <p>Enter your login credentials to sign-in to your account.</p>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome</h1>
            <p>Enter your Email and Password to create an account.</p>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffsLogin;