require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("E-commerce API is running...");
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on port ${process.env.PORT}`);
});