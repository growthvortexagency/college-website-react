const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Faculty = require('../models/facultyModel');

exports.register = async (req, res) => {
  try {
    const { facultyID, name, dob, department, phone, email, password } = req.body;

    // Check if Faculty ID exists in the database
    const faculty = await Faculty.findByFacultyID(facultyID);
    if (!faculty) {
      return res.status(400).json({ message: "Invalid Faculty ID." });
    }

    // Check if Faculty ID is already registered
    if (faculty.password) {
      return res.status(400).json({ message: "Faculty ID already registered." });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Register the faculty
    await Faculty.registerFaculty({ facultyID, name, dob, department, phone, email, password: hashedPassword });

    res.status(201).json({ message: "Registration successful. Please login." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

exports.login = async (req, res) => {
  try {
    const { facultyID, password } = req.body;

    // Find faculty by ID
    const faculty = await Faculty.findByFacultyID(facultyID);
    if (!faculty || !faculty.password) {
      return res.status(400).json({ message: "Invalid Faculty ID or password." });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, faculty.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Faculty ID or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ facultyID: faculty.facultyID }, process.env.JWT_SECRET, { expiresIn: "2h" });

    res.json({ message: "Login successful!", token });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};
