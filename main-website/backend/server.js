const express = require("express");
const mysql = require("mysql2");
const session = require("express-session");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 60 * 1000 }, // 2 hours session expiration
  })
);

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "st_anthony_college_database",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// Admin login route
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM admin_table_users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isValidPassword = await bcrypt.compare(password, results[0].password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Save user session
    req.session.user = results[0].username;
    res.status(200).json({ message: "Login successful" });
  });
});

// Middleware to protect admin routes
const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next(); // User is authenticated
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

app.get("/api/admin/check-session", requireAuth, (req, res) => {
  res.status(200).json({ message: "Session is valid" });
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
