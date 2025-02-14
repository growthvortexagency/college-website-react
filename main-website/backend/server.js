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

///////////////////////
// Faculty Routes
///////////////////////

// Fetch all faculties
app.get("/api/faculties", requireAuth, (req, res) => {
  const query = "SELECT * FROM faculties_page_table";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
});

// Add a new faculty
app.post("/api/faculties", requireAuth, (req, res) => {
  const { name, department, qualifications, role, image_url } = req.body;

  const query =
    "INSERT INTO faculties_page_table (name, department, qualifications, role, image_url) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [name, department, qualifications, role, image_url],
    (err) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.json({ message: "Faculty added successfully" });
    }
  );
});

///////////////////////
// Department Routes
///////////////////////

// Fetch all departments
app.get("/api/departments", requireAuth, (req, res) => {
  const query = "SELECT * FROM departments_faculties_page_table";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
});

// Add a new department
app.post("/api/departments", requireAuth, (req, res) => {
  const { departmentName } = req.body;
  const query = "INSERT INTO departments_faculties_page_table (name) VALUES (?)";
  db.query(query, [departmentName], (err) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json({ message: "Department added successfully" });
  });
});

// Delete department
app.delete("/api/departments/:id", requireAuth, (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM departments_faculties_page_table WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json({ message: "Department deleted successfully" });
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
