const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getAdminByLoginID } = require("../models/Admin");

exports.adminLogin = async (req, res) => {
  try {
    const { loginID, password } = req.body;
    if (!loginID || !password) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const admin = await getAdminByLoginID(loginID);
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: admin.id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "2h" });

    res.cookie("token", token, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 });

    res.json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};
