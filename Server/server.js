import express from 'express';
import pkg from 'mongoose';
const {connect} = pkg;
import likeRouter from "./routes/likeRouter.js";
import userRouter from "./routes/userRouter.js";
import sectionRouter from "./routes/sectionRouter.js";
import postRouter from "./routes/postRouter.js";


const app = express()

app.use("/",postRouter);
app.use("/user",userRouter);
app.use("/",sectionRouter);
app.use("/",likeRouter);


const port = process.env.PORT || 5000
const mongoUri = "mongodb+srv://user:12345@cluster0.usmef.mongodb.net/blog?retryWrites=true&w=majority"
const start = async () => {
    try{
        await connect(mongoUri,{
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