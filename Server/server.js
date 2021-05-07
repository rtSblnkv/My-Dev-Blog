const express = require('express')
const mongoose = require('mongoose')
import {likeRouter} from "../routes/likeRouter";
import {userRouter} from "../routes/userRouter";
import {sectionRouter} from "../routes/sectionRouter";
import {postRouter} from "../routes/postRouter";


const app = express()
app.use("/",postRouter);
app.use("/user",userRouter);
app.use("/",sectionRouter);


const port = process.env.PORT || 5000
const mongoUri = "mongodb+srv://MIha:12345678qwe@cluster0.usmef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const start = async () => {
    try{
        await mongoose.connect(mongoUri,{
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