const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log("Login Request Body:", req.body);
  try {
    // Check if the username exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  console.log("Register Request Body:", req.body);
  try {
    // Check if the username already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();

    const jwt = require("jsonwebtoken");
    const secretKey = process.env.JWT_SECRET; // Retrieve JWT secret key from environment variable
    const payload = {
      userId: admin._id, // Assuming user._id is the user's unique identifier
    };

    // Generate JWT token
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

    res.status(201).json({ token, message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.status(500).json({ message: "Error registering admin" });
  }
};
