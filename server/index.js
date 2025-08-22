// const homeRoute=require("./routes/home-route")
// const uploadRoute=require("./routes/upload-route")
import express, { urlencoded } from "express";
import cors from "cors"; 
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config({});
const PORT=process.env.PORT || 3000;


const app = express();
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOption={
    origin:'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials:true,
}
app.use(cors(corsOption));
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({extended:true}));



// app.use('/api',homeRoute)
// app.use('/api/create',uploadRoute)

app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);


app.listen(PORT, () => {
    // Connect to MongoDB
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
