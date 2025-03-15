const db = require('../config/db');

const ApplyModel = {
    saveApplication: (data, callback) => {
        const sql = `INSERT INTO applications (name, course, email, contact, message) VALUES (?, ?, ?, ?, ?)`;
        db.query(sql, [data.name, data.course, data.email, data.contact, data.message], callback);
    },

    getAllApplications: (callback) => {
        const sql = `SELECT * FROM applications ORDER BY created_at DESC`;
        db.query(sql, callback);
    }
};

module.exports = ApplyModel;
