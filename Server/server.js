import express from 'express';
import path from 'path';
import pkg from 'mongoose';
const {connect,static} = pkg;
import {likeRouter} from "../Server/routes/likeRouter.js";
import {userRouter} from "../Server/routes/userRouter.js";
import {sectionRouter} from "../Server/routes/sectionRouter.js";
import {postRouter} from "../Server/routes/postRouter.js";


const app = express()

app.use("/",postRouter);
app.use("/user",userRouter);
app.use("/",sectionRouter);
app.use("/",likeRouter);

//Production static assets
if(process.env.NODE_ENV==='production'){
    //Set static folder
    app.use(static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile();path.resolve(__dirname,'client','build','index.html');
    });
}


const port = process.env.PORT || 5000

const mongoUri = "mongodb+srv://rTSblnkv:12hh45hh@cluster0.usmef.mongodb.net/blog?retryWrites=true&w=majority"
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