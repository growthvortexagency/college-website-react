import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/pages/AdminLogin.css";

const AdminLogin = () => {
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/admin/login",
        { loginID, password },
        { withCredentials: true }
      );

      if (response.data.success) {
        setMessage({ type: "success", text: "Login successful! Redirecting..." });
        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 2000);
      } else {
        setMessage({ type: "error", text: response.data.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="loginID">Login ID</label>
        <input
          type="text"
          id="loginID"
          value={loginID}
          onChange={(e) => setLoginID(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Log In"}</button>
        {message && <p className={message.type === "success" ? "success-message" : "error-message"}>{message.text}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
