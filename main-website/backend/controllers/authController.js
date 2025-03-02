const Faculty = require('../models/facultyModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { facultyID, name, dob, department, phone, email, password } = req.body;

  // Validate password (must be at least 8 characters with letters & numbers)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (password && !passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long and include both letters and numbers.' });
  }

  // Check if Faculty ID exists
  Faculty.checkFacultyID(facultyID, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid Faculty ID' });
    }

    // If no additional data, just insert Faculty ID
    if (!password) {
      return res.status(200).json({ message: 'Faculty ID registered successfully' });
    }

    // Hash password before saving
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ message: 'Error hashing password' });

      // Update faculty details
      Faculty.registerFaculty(
        { facultyID, name, dob, department, phone, email, password: hashedPassword },
        (err, results) => {
          if (err) return res.status(500).json({ message: 'Database error' });

          res.status(200).json({ message: 'Registration successful!' });
        }
      );
    });
  });
};

exports.login = (req, res) => {
  const { facultyID, password } = req.body;

  Faculty.loginFaculty(facultyID, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (results.length === 0) {
      return res.status(400).json({ message: 'Faculty ID not found' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Error comparing passwords' });

      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect password' });
      }

      const token = jwt.sign({ facultyID: user.facultyID }, 'secret_key', { expiresIn: '2h' });

      res.status(200).json({ message: 'Login successful', token });
    });
  });
};
