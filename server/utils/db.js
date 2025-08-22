import mongoose from "mongoose";

const connectDB=async()=>{
    try{
         await mongoose.connect(process.env.MONGODB_URI);
         console.log("connection sucessful to db");
         
    }catch(error){
        console.error("database connection failed",error);
        process.exit(1) //abnormal exit(failure)
    }
}

export default connectDB;