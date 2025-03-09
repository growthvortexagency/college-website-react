const db = require('../config/db');

class Faculty {
  static async findByFacultyID(facultyID) {
    const [result] = await db.query('SELECT * FROM faculty WHERE facultyID = ?', [facultyID]);
    return result[0];
  }

  static async registerFaculty({ facultyID, name, dob, department, phone, email, password }) {
    const [result] = await db.query(
      'INSERT INTO faculty (facultyID, name, dob, department, phone, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [facultyID, name, dob, department, phone, email, password]
    );
    return result;
  }
}

module.exports = Faculty;
