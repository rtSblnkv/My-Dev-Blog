import express from 'express';
import pkg from 'mongoose';
const {connect} = pkg;
import {likeRouter} from "../Server/routes/likeRouter.js";
import {userRouter} from "../Server/routes/userRouter.js";
import {sectionRouter} from "../Server/routes/sectionRouter.js";
import {postRouter} from "../Server/routes/postRouter.js";


const app = express()
app.use("/",postRouter);
app.use("/user",userRouter);
app.use("/",sectionRouter);
app.use("/",likeRouter);


const port = process.env.PORT || 5000
const mongoUri = "mongodb+srv://MIha:12345678qwe@cluster0.usmef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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