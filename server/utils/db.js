const mongoose=require("mongoose");

const URI=process.env.MONGODB_URI

const connectDb=async()=>{
    try{
         await mongoose.connect(URI)
         console.log("connection sucessful to db")
         
    }catch(error){
        console.error("database connection failed");
        process.exit(1) //abnormal exit(failure)
    }
}

module.exports=connectDb;