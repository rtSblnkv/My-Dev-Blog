import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'mongoose';
const {connect} = pkg;
import likeRouter from "./routes/likeRouter.js";
import userRouter from "./routes/userRouter.js";
import sectionRouter from "./routes/sectionRouter.js";
import postRouter from "./routes/postRouter.js";


dotenv.config();
const app = express()

app.use(cors());

app.use("/",postRouter);
app.use("/user",userRouter);
app.use("/",sectionRouter);
app.use("/",likeRouter);


const port = process.env.PORT || 5000;
const mongo_uri = process.env.MONGO_URI;

const start = async () => {
    try{
        await connect(mongo_uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        app.listen(port,()=>{
            console.log('Server is running on port ',port)
        })
    } catch(e){
    }
}
start();