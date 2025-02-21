import '../../styles/StaffsLogin.css';
import { ReactComponent as User } from '../../assets/icons/user-solid.svg';
import { ReactComponent as FacID } from '../../assets/icons/id-card-solid.svg';
import { ReactComponent as Lock } from '../../assets/icons/lock-solid.svg';
import { ReactComponent as Envelope } from '../../assets/icons/envelope-solid.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StaffsLogin = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ facultyID: '', password: '', name: '', email: '' });
  const [errors, setErrors] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors('');
    setSuccessMessage('');
  };

  const handleRegisterClick = () => {
    setIsActive(true);
    setErrors('');
    setSuccessMessage('');
  };

  const handleLoginClick = () => {
    setIsActive(false);
    setErrors('');
    setSuccessMessage('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = isActive ? 'http://localhost:5000/register' : 'http://localhost:5000/login';

    try {
      const response = await axios.post(url, formData);
      setSuccessMessage(response.data.message);
      setErrors('');

      // If logging in, save token and redirect after 1.5 sec
      if (!isActive) {
        localStorage.setItem('token', response.data.token);
        setTimeout(() => navigate('/Dashboards/StaffDashboard'), 1500);
      }
    } catch (error) {
      setErrors(error.response?.data?.message || 'An error occurred.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="body">
      <div className={`container1 ${isActive ? 'active' : ''}`}>
        
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={handleFormSubmit}>
            <h1>Sign In</h1>
            {errors && <p className="error-message">{errors}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className="input-box">
              <input type="text" name="facultyID" placeholder="Enter your Faculty ID" value={formData.facultyID} onChange={handleInputChange} required />
              <FacID width='20px' height='20px' className='icon' />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Enter your Password" value={formData.password} onChange={handleInputChange} required />
              <Lock width='20px' height='20px' className='icon' />
            </div>
            <button type="submit" className="btn">Sign In</button>
          </form>
        </div>

        {/* Signup Form */}
        <div className="form-box signup">
          <form onSubmit={handleFormSubmit}>
            <h1>Sign Up</h1>
            {errors && <p className="error-message">{errors}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className="input-box">
              <input type="text" name="facultyID" placeholder="Enter Faculty ID" value={formData.facultyID} onChange={handleInputChange} required />
              <FacID width='20px' height='20px' className='icon' />
            </div>
            <div className="input-box">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
              <User width='20px' height='20px' className='icon' />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              <Envelope width='20px' height='20px' className='icon' />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleInputChange} required />
              <Lock width='20px' height='20px' className='icon' />
            </div>
            <button type="submit" className="btn">Sign Up</button>
          </form>
        </div>

        {/* Sliding Panel */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!!</h1>
            <p>Don't have an account?</p>
            <button className="btn" onClick={handleRegisterClick}>Sign Up</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Join Us!!</h1>
            <p>Already have an account?</p>
            <button className="btn" onClick={handleLoginClick}>Sign In</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StaffsLogin;
