const bcrypt = require("bcrypt");

const plainPassword = "Kashish@2004"; // Replace with your password

// Hash the password with 10 salt rounds
bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
  if (err) {
    console.error("Error hashing password:", err);
    return;
  }
  console.log("Hashed Password:", hashedPassword);
});