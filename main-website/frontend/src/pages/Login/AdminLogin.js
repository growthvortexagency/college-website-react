import { useState } from "react";
import axios from "axios";
import "../../styles/pages/AdminLogin.css";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "", // Fixed: Changed from "email" to "username"
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Correctly updates state
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // To handle cookies/sessions
      });

      console.log("Response:", response.data);
      alert("Login Successful");
      // Redirect to admin dashboard on success
      window.location.href = "/admin-dashboard";
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="adminLogin-container">
      <div className="adminLogin-login-box">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="adminLogin-form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="adminLogin-form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="adminLogin-login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
