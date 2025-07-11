const express=require('express');
const Image = require('../models/image-modal.js');  // Import the Image model 

const router=express.Router();

router.get('/message',async(req,res)=>{
    const images=await Image.find({},'image');
    // console.log(images)
    // res.json({message:"hello from server!.."})
    res.json(images)
})

module.exports=router;