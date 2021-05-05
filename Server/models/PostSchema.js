import {Schema} from "mongoose";

const PostSchema = new Schema({
    title:{type:String,requred:true},  
    text:{type:String,requred:true},
    date:{type:Date,default:Date.now},
    hashtags:{type:[String],match:'\#[a-zA-Z]'},
    section:{type:Schema.ObjectId,ref:'Section',required:true},
    author:{type:Schema.ObjectId,ref:'User',required:true},
});

const Post = model("post",PostSchema);
export {Post};