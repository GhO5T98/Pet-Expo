const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const AuthRoutes = require("./routes/authRoutes");
const PetRoutes = require("./routes/petRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api", AuthRoutes);
app.use(PetRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
