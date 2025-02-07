import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check session or authentication state
    const checkAuth = async () => {
      const response = await fetch("http://localhost:5000/api/admin/check-session", {
        credentials: "include",
      });

      if (response.ok) {
        setAuth(true);
      } else {
        navigate("/adminlogin"); // Redirect if not authenticated
      }
    };

    checkAuth();
  }, [navigate]);

  return auth ? <div>Welcome to Admin Dashboard</div> : null;
};

export default AdminDashboard;
