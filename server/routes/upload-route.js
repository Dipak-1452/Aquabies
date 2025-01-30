const express = require('express');
const Image = require('../models/image-modal.js');  // Import the Image model 
 
const router = express.Router();

router.post('/upload',async (req, res) => {
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({ message: "No image provided" });
    }
    console.log("Received Image:", image.substring(0, 100) + "..."); // Log first 100 chars
    // Save the Base64 string to MongoDB (or do whatever you want with it)
    const newImage = new Image({ image });
    await newImage.save();
    
    res.json({ message: "Image received successfully" });
})

module.exports = router;