const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default username for XAMPP MySQL
  password: '', // Leave empty unless you've set a password
  database: 'st_anthony_college_database',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = db;
