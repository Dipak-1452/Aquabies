const express = require("express");
require("dotenv").config();
const homeRoute=require("./routes/home-route")
const uploadRoute=require("./routes/upload-route")
const connectDB = require('./utils/db'); // Import the connectDB function
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from frontend
// app.use(express.json());  // For parsing application/json
app.use(express.json({ limit: "10mb" }));

// Connect to MongoDB
connectDB();

// app.get("/api/message", (req, res) => {
//     res.json({ message: "Hello from Backend!" });
// });
app.use('/api',homeRoute)
app.use('/api/create',uploadRoute)


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
