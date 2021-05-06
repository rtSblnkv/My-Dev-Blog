const express = require('express')
import {likeRouter} from "../routes/likeRouter";
import {userRouter} from "../routes/userRouter";
import {sectionRouter} from "../routes/sectionRouter";
import {postRouter} from "../routes/postRouter";


const app = express()
app.use("/api",postRouter);
app.use("/api",userRouter);
app.use("/api",sectionRouter);
app.use("/api",likeRouter);

const port = process.env.PORT || 5000
const mongoUri = "mongodb+srv://MIha:12345678qwe@cluster0.usmef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const start = async () => {
    try{
        await mongoose.connect(mongoUri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        app.listen(port,() => {
            console.log('Server is running on port ',port)
        })
    } catch(e){
    }
}
start();