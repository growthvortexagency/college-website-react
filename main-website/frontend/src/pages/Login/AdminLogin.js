import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        navigate("/admin-dashboard");
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (err) {
      setError("Server error, please try again.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin}>
        <h3>Login Here</h3>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default AdminLogin;
