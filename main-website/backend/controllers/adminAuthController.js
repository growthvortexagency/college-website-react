const Admin = require("../models/adminLoginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.adminLogin = (req, res) => {
    const { loginID, password } = req.body;

    if (!loginID || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    Admin.findByLoginID(loginID, async (err, results) => {
        if (err) {
            console.error("❌ Database error:", err);
            return res.status(500).json({ success: false, message: "Server error. Please try again later." });
        }

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid login ID or password." });
        }

        const admin = results[0];

        try {
            const passwordMatch = await bcrypt.compare(password, admin.password);
            if (!passwordMatch) {
                return res.status(401).json({ success: false, message: "Invalid login ID or password." });
            }

            // Generate JWT Token (Expires in 2 hours)
            const token = jwt.sign({ adminID: admin.id }, process.env.JWT_SECRET, { expiresIn: "2h" });

            return res.json({
                success: true,
                message: "Login successful!",
                token
            });
        } catch (error) {
            console.error("❌ Error in authentication:", error);
            return res.status(500).json({ success: false, message: "Server error. Please try again later." });
        }
    });
};
