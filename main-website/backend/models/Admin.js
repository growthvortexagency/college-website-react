const db = require("../config/db");

const Admin = {
    findByLoginID: (loginID, callback) => {
        db.query("SELECT * FROM admin_login_table WHERE loginID = ?", [loginID], callback);
    }
};

module.exports = Admin;
