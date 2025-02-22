const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'st_anthony_college_database'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Secret Key for JWT
const JWT_SECRET = 'your_jwt_secret';

// Register Endpoint
app.post('/register', async (req, res) => {
    const { facultyID, name, email, password } = req.body;

    if (!facultyID || !name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO faculty (facultyID, name, email, password) VALUES (?, ?, ?, ?)';
        db.query(query, [facultyID, name, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(400).json({ message: 'Account already exists' });
            }
            res.status(201).json({ message: 'Registration successful' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { facultyID, password } = req.body;

    const query = 'SELECT * FROM faculty WHERE facultyID = ?';
    db.query(query, [facultyID], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ facultyID: user.facultyID }, JWT_SECRET, { expiresIn: '2h' });
        res.json({ message: 'Login successful', token });
    });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});