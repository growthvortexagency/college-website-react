const db = require('../config/db');

const Faculty = {
  checkFacultyID: (facultyID, callback) => {
    db.query('SELECT * FROM faculty WHERE facultyID = ?', [facultyID], callback);
  },

  registerFaculty: (data, callback) => {
    const { facultyID, name, dob, department, phone, email, password } = data;
    db.query(
      'UPDATE faculty SET name=?, dob=?, department=?, phone=?, email=?, password=? WHERE facultyID=?',
      [name, dob, department, phone, email, password, facultyID],
      callback
    );
  },

  loginFaculty: (facultyID, callback) => {
    db.query('SELECT * FROM faculty WHERE facultyID = ?', [facultyID], callback);
  }
};

module.exports = Faculty;
