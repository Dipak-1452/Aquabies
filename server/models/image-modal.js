const mongoose=require("mongoose");

// Define the image schema
const imageSchema = new mongoose.Schema({
    image: { type: String, required: true }, // Store the Base64 image string
});

const Image =mongoose.model('Image', imageSchema);//collection name and schema

module.exports=Image;